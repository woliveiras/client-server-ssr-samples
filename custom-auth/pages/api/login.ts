import type { NextApiRequest, NextApiResponse } from 'next'
import { encode } from 'lib/jwt'
import { serialize } from 'cookie'

const authenticatedUser = (email: string, password: string) => {
    const validEmail = 'jobson@dafirma.com'
    const validaPassword = 'very5trongP@ssw0rD'

    if (email === validEmail && password === validaPassword) {
        return encode({
            id: 'asdasdda-adsadasd-adsadadasd-dasdasdd',
            name: 'Jobson da Silva',
            email: 'jobson@dafirma.com'
        })
    }

    return null
}

const Login = (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    const { email, password } = req.body

    if (method !== 'POST') {
        return res.status(404).end()
    }

    if (!email || !password) {
        return res.status(400).json({
            error: 'Missing required params'
        })
    }

    const user = authenticatedUser(email, password)

    if (user) {
        res.setHeader('Set-Cookie', serialize(
            'my_auth', user,
            {
                path: '/',
                httpOnly: true
            }
        ))

        return res.json({ success: true })
    } else {
        return res.status(401).json({
            success: false,
            error: 'Wrong email or password'
        })
    }
}

export default Login