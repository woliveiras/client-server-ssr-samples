import React, { useEffect, useState } from 'react'
import { useData } from './useData'

const GitHubUserData = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { data } = useData('https://api.github.com/users/woliveiras')

    if(!data) return 'loading'

    return (
        <>
            <p>{data?.name}</p>
        </>
    )
}

export default GitHubUserData