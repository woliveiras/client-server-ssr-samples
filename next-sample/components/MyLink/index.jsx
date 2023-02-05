import { useRouter } from "next/router";

const MyLink = ({ children, href }) => {
    const router = useRouter()

    return (
        <>
            <span
                style={{
                    border: router.pathname === href ? '1px solid red' : ''
                }}>
                {children}
            </span>
        </>
    )
}

export default MyLink