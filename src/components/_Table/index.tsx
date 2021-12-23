import { TablePropGetter, TableBodyPropGetter, TableBodyProps, TableProps, Row } from 'react-table'

import { Table, TableProps as TablePropsChakra } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'

import { TBodyComponent } from './TBody'
import { THeadComponent } from './THead'

interface IPropsTable extends TablePropsChakra {
    getTableProps: (propGetter?: TablePropGetter<object>) => TableProps
    headerGroups: THeaderGroup<object>[]
    getTableBodyProps: (propGetter?: TableBodyPropGetter<object>) => TableBodyProps
    rows: Row<object>[]
    prepareRow: (row: Row<object>) => void
}

export function TableComponent (props: IPropsTable): JSX.Element {
    const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } = props

    return (
        <Table {...getTableProps()} ml={2} width={'98.4vw'}>
            <THeadComponent headerGroups={headerGroups}/>
            <TBodyComponent getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow}/>
        </Table>
    )
}