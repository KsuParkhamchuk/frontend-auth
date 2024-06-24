'use client'

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get('/check-auth', { withCredentials: true})
                setIsAuthenticated(response.data.isAuthenticated)
            } catch {
                setIsAuthenticated(false)
            } finally {
                setIsLoading(false)
            }
        }

        checkAuth()
    }, [router])

    return { isAuthenticated, isLoading }
}

export default useAuth