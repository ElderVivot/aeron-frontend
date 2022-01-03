import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { PropsWithChildren, useMemo } from 'react'
import { useTable, useSortBy, Column, useFilters } from 'react-table'

import { fetchDataClients } from '@api/public/Client'
import { fetchDataLogNotaFiscal } from '@api/tenant/LogNotaFiscal'
import { ILogNotaFiscal } from '@api/tenant/LogNotaFiscal/ILogNotaFiscal'
import { Text, Box, Heading } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { DefaultColumnFilter } from '@components/_ColumnFilter'
import { LayoutDefault } from '@components/_LayoutDefault'
import { TableComponent } from '@components/_Table'
import { columnsHeader } from '@components/LogNotaFiscal/_columns_header'
import { initialState as initialStateData } from '@components/LogNotaFiscal/_initial_state'
import { FilterComponent } from '@components/LogNotaFiscal/Filters'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ILogNotaFiscal[]
}

export default function LogNotesGO ({ dataFetch }: IProps): JSX.Element {
    const router = useRouter()

    const data = useMemo(() => dataFetch, [dataFetch])
    const columns: Column[] = useMemo(() => columnsHeader, [])
    const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter, disableFilters: false }), [])
    const initialState = useMemo(() => initialStateData, [])

    const tableInstance = useTable({ columns, data, defaultColumn, initialState }, useFilters, useSortBy)

    const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance
    const headerGroups: THeaderGroup<object>[] = tableInstance.headerGroups

    return (
        <LayoutDefault>
            {!router.isReady
                ? (
                    <Heading as='h3' size='md'>Carregando...</Heading>
                )
                : (
                    <Box>
                        <Text fontSize={'lg'} textAlign={'center'} my={2} fontWeight={500}>Resultado do processamento NF-e, NFC-e, CT-e</Text>
                        <FilterComponent ml={2} />
                        <TableComponent
                            getTableProps={getTableProps} headerGroups={headerGroups}
                            getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow}
                            heightToSubtractOfContentBody='190px'
                        />
                    </Box>
                )}
        </LayoutDefault>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchDataClients()

    const paths = data.map(client => {
        return { params: { tenant: client.idClient.substring(0, 15) } }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const tenant: string = context.params?.tenant
    const data = await fetchDataLogNotaFiscal(tenant)

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            dataFetch: data
        }
    }
}