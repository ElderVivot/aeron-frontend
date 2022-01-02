import axios from 'axios'

import { ICompanie } from './ICompanie'

export const fetchDataCompanies = async (tenant: string): Promise<ICompanie[] | null> => {
    try {
        const url = `${process.env.API_HOST}/companie`
        const result = await axios.get(url, { headers: { tenant } })
        return result.data
    } catch (error) {
        console.log(error)
        return null
    }
}