
import { PropsWithChildren, useMemo } from 'react'
import { useTable, useSortBy, Column, useFilters } from 'react-table'

import { Text, Box, Heading } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { formatDate } from '@common/utils/functions'
import { DefaultColumnFilter } from '@components/_ColumnFilter'
import { TableComponent } from '@components/_Table'
import { useDataPageLogNotaFiscal } from '@context/tenant/LogNotaFiscal'
import { useFetch } from '@hooks/useFetch'

import { columnsHeader } from './_columns_header'
import { IDataPageLogNotaFiscal } from './_IDataPage'
import { ILogNotaFiscal } from './_ILogNotaFiscal'
import { initialState as initialStateData } from './_initial_state'
import { FilterComponent } from './Filters'

function getDatesDown (dataPage: IDataPageLogNotaFiscal): string {
    try {
        const { competence } = dataPage
        const dateStartDownStr = `${competence.substring(0, 4)}-${competence.substring(4)}-01`
        const dateEndDown = new Date(Number(competence.substring(0, 4)), Number(competence.substring(4)), 0)
        const dateEndDownStr = formatDate(dateEndDown)
        return `dateStartDownBetween=${dateStartDownStr}&dateEndDownBetween=${dateEndDownStr}`
    } catch (error) {
        return ''
    }
}

interface IProps extends PropsWithChildren<object> {
    tenant: string
}

export function LogNotaFiscal ({ tenant }: IProps): JSX.Element {
    const { dataPage } = useDataPageLogNotaFiscal()

    const { data } = useFetch<ILogNotaFiscal>(
        `${process.env.API_HOST}/log_nota_fiscal?${getDatesDown(dataPage)}`,
        {
            tenant
        }
    )

    const dataMemo = useMemo(() => data || [], [data])
    const columns: Column[] = useMemo(() => columnsHeader, [])
    const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter, disableFilters: false }), [])
    const initialState = useMemo(() => initialStateData, [])

    const tableInstance = useTable({ columns, data: dataMemo, defaultColumn, initialState }, useFilters, useSortBy)

    const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance
    const headerGroups: THeaderGroup<object>[] = tableInstance.headerGroups

    if (!data) {
        return <Heading as='h3' size='md'>Carregando...</Heading>
    }

    return (
        <Box>
            <Text fontSize={'lg'} textAlign={'center'} my={2} fontWeight={500}>Resultado do processamento NF-e, NFC-e, CT-e</Text>
            <FilterComponent ml={2}/>
            <TableComponent
                getTableProps={getTableProps} headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow}
                heightToSubtractOfContentBody='190px'
            />
        </Box>
    )
}