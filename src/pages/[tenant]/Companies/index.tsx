import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'//
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

import { fetchDataClients } from '@api/public/Client'
import { fetchDataCompanies } from '@api/tenant/Companies'
import { ICompanie } from '@api/tenant/Companies/ICompanie'
import { Heading } from '@chakra-ui/react'
import { LayoutDefault } from '@components/_LayoutDefault'
import { Companies as CompaniesComponent } from '@components/Companies'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ICompanie[]
}

export default function Companies({ dataFetch }: IProps): JSX.Element {
    const router = useRouter()

    if (!router.isReady) {
        return (
            <LayoutDefault>
                <Heading as='h3' size='md'>Carregando...</Heading>
            </LayoutDefault>
        )
    }

    return (
        <LayoutDefault>
            <CompaniesComponent dataFetch={dataFetch}></CompaniesComponent>
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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
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
        },
        revalidate: 14400
    }
}