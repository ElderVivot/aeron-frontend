import { TableState } from 'react-table'

export const initialState: Partial<TableState<object>> = {
    sortBy: [
        {
            id: 'codeCompanieAccountSystem',
            desc: false
        }, {
            id: 'modelNotaFiscal',
            desc: false
        }, {
            id: 'situationNotaFiscal',
            desc: false
        }, {
            id: 'dateStartDown',
            desc: false
        }
    ],
    pageSize: 300
}