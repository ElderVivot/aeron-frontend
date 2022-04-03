import axios from 'axios'

import { IClient } from './IClient'

export const fetchDataClients = async (): Promise<IClient[] | null> => {
    try {
        const url = `${process.env.API_HOST}/client?status=ACTIVE&federalRegistration=20493824000158`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}