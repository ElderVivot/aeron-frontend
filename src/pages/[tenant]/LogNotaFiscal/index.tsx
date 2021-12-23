import { useMemo } from 'react'
import { useTable, useSortBy, Column, useFilters } from 'react-table'

import { Text } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { DefaultColumnFilter } from '@components/_ColumnFilter'
import { LayoutDefault } from '@components/_LayoutDefault'
import { TableComponent } from '@components/_Table'
import { FilterComponent } from '@components/LogNotaFiscal/Filters'

import { columnsHeader } from './_columns_header'
import { data as dataFetch } from './_fetch_data'

export default function LogNotesGO (): JSX.Element {
    const data = useMemo(() => dataFetch, [])
    const columns: Column[] = useMemo(() => columnsHeader, [])
    const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter, disableFilters: false }), [])

    const tableInstance = useTable({ columns, data, defaultColumn }, useFilters, useSortBy)

    const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance
    const headerGroups: THeaderGroup<object>[] = tableInstance.headerGroups

    return (
        <LayoutDefault>
            <Text fontSize={'lg'} textAlign={'center'} my={3} fontWeight={500}>Resultado do processamento NF-e, NFC-e, CT-e</Text>
            <FilterComponent ml={2} />
            <TableComponent
                getTableProps={getTableProps} headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow}
            />
        </LayoutDefault>
    )
}