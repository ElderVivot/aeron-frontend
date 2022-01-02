import { GetServerSidePropsContext, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PropsWithChildren, useMemo } from 'react'
import { useTable, useSortBy, Column, useFilters } from 'react-table'

import { fetchDataClients } from '@api/public/Client'
import { fetchDataCompanies } from '@api/tenant/Companies'
import { ICompanie } from '@api/tenant/Companies/ICompanie'
import { Box, Text, Heading } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { DefaultColumnFilter } from '@components/_ColumnFilter'
import { LayoutDefault } from '@components/_LayoutDefault'
import { TableComponent } from '@components/_Table/'
import { columnsHeader } from '@components/Companies/_columns_header'
import { initialState as initialStateData } from '@components/Companies/_initial_state'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ICompanie[]
}

export default function Companies ({ dataFetch }: IProps): JSX.Element {
    const router = useRouter()

    const data = useMemo(() => dataFetch, [dataFetch])
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
        <LayoutDefault>
            {!router.isReady
                ? (
                    <Heading as='h3' size='lg'>Carregando</Heading>
                )
                : (
                    <Box>
                        <Text fontSize={'lg'} textAlign={'center'} my={3} fontWeight={500}>Cadastros de Empresas</Text>
                        <TableComponent
                            getTableProps={getTableProps} headerGroups={headerGroups}
                            getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow}
                            heightToSubtractOfContentBody='140px'
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
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context: GetServerSidePropsContext) => {
    const tenant: string = context.params?.tenant
    const data = await fetchDataCompanies(tenant)

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