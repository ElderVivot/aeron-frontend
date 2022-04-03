import { TableState } from 'react-table'

export const initialState: Partial<TableState<object>> = {
    sortBy: [
        {
            id: 'cityRegistration',
            desc: false
        }, {
            id: 'dateStartDown',
            desc: false
        }
    ],
    pageSize: 300
}