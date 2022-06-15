import { TableState } from 'react-table'

export const initialState: Partial<TableState<object>> = {
    sortBy: [
        {
            id: 'nameCert',
            desc: false
        }
    ],
    pageSize: 300
}