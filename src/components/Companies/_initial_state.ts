import { TableState } from 'react-table'

export const initialState: Partial<TableState<object>> = {
    sortBy: [
        {
            id: 'codeCompanieAccountSystem',
            desc: false
        }
    ],
    pageSize: 300
}