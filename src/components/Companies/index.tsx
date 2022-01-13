import { PropsWithChildren, useMemo } from 'react'
import { useTable, useSortBy, Column, useFilters } from 'react-table'

import { ICompanie } from '@api/tenant/Companies/ICompanie'
import { Box, Text } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { DefaultColumnFilter } from '@components/_ColumnFilter'
import { TableComponent } from '@components/_Table/'
import { columnsHeader } from '@components/Companies/_columns_header'
import { initialState as initialStateData } from '@components/Companies/_initial_state'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ICompanie[]
}

export function Companies ({ dataFetch }: IProps): JSX.Element {
    const data = useMemo(() => dataFetch || [], [dataFetch])
    const columns: Column[] = useMemo(() => columnsHeader, [])
    const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter, disableFilters: false }), [])
    const initialState = useMemo(() => initialStateData, [])

    const tableInstance = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState
        },
        useFilters, useSortBy)

    const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance
    const headerGroups: THeaderGroup<object>[] = tableInstance.headerGroups

    return (
        <Box>
            <Text fontSize={'lg'} textAlign={'center'} my={3} fontWeight={500}>Cadastros de Empresas</Text>
            <TableComponent
                getTableProps={getTableProps} headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow}
                heightToSubtractOfContentBody='140px'
            />
        </Box>
    )
}