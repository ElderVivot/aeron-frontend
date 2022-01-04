import axios from 'axios'

import { ILogNotaFiscal } from './ILogNotaFiscal'

export const fetchDataLogNotaFiscal = async (tenant: string): Promise<ILogNotaFiscal[] | null> => {
    try {
        const url = `${process.env.API_HOST}/log_nota_fiscal?dateStartDownBetween=2021-12-01&dateEndDownBetween=2021-12-31`
        const result = await axios.get(url, { headers: { tenant } })
        return result.data
    } catch (error) {
        console.log(error)
        return null
    }
}