import React from 'react'
import Link from 'next/link'
import MyLink from '../MyLink'

const Nav = React.forwardRef(({ onClick, href }, ref) => (
    <div>
        <Link href="/" passHref legacyBehavior><MyLink>Home</MyLink></Link>
        <Link href="/about" passHref legacyBehavior><MyLink>About</MyLink></Link>
    </div>
))

export default Nav