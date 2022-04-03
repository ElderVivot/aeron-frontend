
import { PropsWithChildren, useMemo } from 'react'
import { useTable, useSortBy, Column, useFilters, usePagination } from 'react-table'

import { ILogNotaFiscal } from '@api/tenant/LogNotaFiscal/ILogNotaFiscal'
import { Text, Box } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { DefaultColumnFilter } from '@components/_ColumnFilter'
import { PaginationComponent } from '@components/_Pagination'
import { TableComponent } from '@components/_Table'

import { columnsHeader } from './_columns_header'
import { initialState as initialStateData } from './_initial_state'
import { FilterComponent } from './Filters'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ILogNotaFiscal[]
}

export function LogNotaFiscal ({ dataFetch }: IProps): JSX.Element {
    const dataMemo = useMemo(() => dataFetch || [], [dataFetch])
    const columns: Column[] = useMemo(() => columnsHeader, [])
    const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter, disableFilters: false }), [])
    const initialState = useMemo(() => initialStateData, [])

    const tableInstance = useTable({ columns, data: dataMemo, defaultColumn, initialState }, useFilters, useSortBy, usePagination)

    const {
        getTableProps, getTableBodyProps, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage,
        pageOptions, state, gotoPage, pageCount
    } = tableInstance

    const headerGroups: THeaderGroup<object>[] = tableInstance.headerGroups

    return (
        <Box>
            <Text fontSize={'lg'} textAlign={'center'} my={2} fontWeight={500}>Resultado do processamento NF-e, NFC-e, CT-e</Text>
            <FilterComponent ml={2}/>
            <TableComponent
                getTableProps={getTableProps} headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps} page={page} prepareRow={prepareRow}
                heightToSubtractOfContentBody='215px'
            />
            <PaginationComponent previousPage={previousPage} nextPage={nextPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage}
                pageOptions={pageOptions} pageIndex={state.pageIndex} gotoPage={gotoPage} pageCount={pageCount}
            />
        </Box>
    )
}