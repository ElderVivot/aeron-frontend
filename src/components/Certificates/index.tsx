import { PropsWithChildren, useMemo } from 'react'
import { useTable, useSortBy, Column, useFilters, usePagination } from 'react-table'

import { ICertificate } from '@api/tenant/Certificates/ICertificate'
import { Box, Text } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { DefaultColumnFilter } from '@components/_ColumnFilter'
import { PaginationComponent } from '@components/_Pagination'
import { TableComponent } from '@components/_Table/'
import { columnsHeader } from '@components/Certificates/_columns_header'
import { initialState as initialStateData } from '@components/Certificates/_initial_state'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ICertificate[]
}

export function Certificates ({ dataFetch }: IProps): JSX.Element {
    console.log(dataFetch)
    const data = useMemo(() => dataFetch || [], [dataFetch])
    const columns: Column[] = useMemo(() => columnsHeader, [])
    const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter, disableFilters: false }), [])
    const initialState = useMemo(() => initialStateData, [])

    const tableInstance = useTable({ columns, data, defaultColumn, initialState }, useFilters, useSortBy, usePagination)

    const {
        getTableProps, getTableBodyProps, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage,
        pageOptions, state, gotoPage, pageCount
    } = tableInstance
    const headerGroups: THeaderGroup<object>[] = tableInstance.headerGroups

    return (
        <Box>
            <Text fontSize={'lg'} textAlign={'center'} my={3} fontWeight={500}>Cadastros de Certificados</Text>
            <TableComponent
                getTableProps={getTableProps} headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps} page={page} prepareRow={prepareRow}
                heightToSubtractOfContentBody='165px'
            />
            <PaginationComponent previousPage={previousPage} nextPage={nextPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage}
                pageOptions={pageOptions} pageIndex={state.pageIndex} gotoPage={gotoPage} pageCount={pageCount}
            />
        </Box>
    )
}