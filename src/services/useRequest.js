import { useState, useCallback } from "react"

const useRequest = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // const request = async (url) => {
    //     setLoading(true)
    //     const response = await fetch(url, {method: 'GET', headers: {'Content-type': 'application/json'}})

    //     if (!response.ok) {
    //         setError(true)
    //         throw new Error (`Something go wrong, status - ${response.status}`)
    //     }

    //     setLoading(false)

    //     return response.json()
    // }

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-type': 'application/json' } ) => {
        setLoading(true)

        try {
            const response = await fetch(url, { method, headers, body })
            if (!response.ok) {
                throw new Error(`Something go wrong, status - ${response.status}`)
            }
            return response.json()
        }
        
        catch (e) {
            setError(e.message)
            throw e
        }

        finally {
            setLoading(false)
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { request, loading, error, clearError }
}

export default useRequest
