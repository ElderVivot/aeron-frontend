import axios from 'axios'

import { ICertificate } from './ICertificate'

export const fetchDataCertificates = async (tenant: string): Promise<ICertificate[] | null> => {
    try {
        const url = `${process.env.API_HOST}/certificate`
        const result = await axios.get(url, { headers: { tenant } })
        return result.data
    } catch (error) {
        console.log(error)
        return null
    }
}