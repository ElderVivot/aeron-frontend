import axios, { AxiosRequestHeaders } from 'axios'
import useSWR, { SWRResponse } from 'swr'

export function useFetch<Data = any, Error = any> (url: string, headers: AxiosRequestHeaders): SWRResponse {
    const { data, error, mutate, isValidating } = useSWR<Data, Error>(url, async (url: string) => {
        const response = await axios.get(url, { headers })
        return response.data
    })
    return { data, error, mutate, isValidating }
}