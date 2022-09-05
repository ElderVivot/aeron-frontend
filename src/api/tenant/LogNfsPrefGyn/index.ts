import axios from 'axios'//

import { formatDate } from '@common/utils/functions'

import { ILogNfsPrefGyn } from './ILogNfsPrefGyn'

function getDatesDown (competence: string): string {
    try {
        const dateStartDownStr = `${competence.substring(0, 4)}-${competence.substring(4)}-01`
        const dateEndDown = new Date(Number(competence.substring(0, 4)), Number(competence.substring(4)), 0)
        const dateEndDownStr = formatDate(dateEndDown)
        return `dateStartDownBetween=${dateStartDownStr}&dateEndDownBetween=${dateEndDownStr}`
    } catch (error) {
        return ''
    }
}

export const fetchDataLogNfsPrefGyn = async (tenant: string, competence: string): Promise<ILogNfsPrefGyn[] | null> => {
    try {
        const url = `${process.env.API_HOST}/log_nfs_pref_gyn?${getDatesDown(competence)}`
        const result = await axios.get(url, { headers: { tenant } })
        return result.data
    } catch (error) {
        console.log(error)
        return null
    }
}