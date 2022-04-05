import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

import { fetchDataClients } from '@api/public/Client'
import { fetchDataLogNfsPrefGyn } from '@api/tenant/LogNfsPrefGyn'
import { ILogNfsPrefGyn } from '@api/tenant/LogNfsPrefGyn/ILogNfsPrefGyn'
import { Heading } from '@chakra-ui/react'
import { LayoutDefault } from '@components/_LayoutDefault'
import { LogNfsePrefGynComponent } from '@components/LogNfsPrefGyn'
import { getCompetenceMain } from '@components/LogNotaFiscal/_utils'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ILogNfsPrefGyn[]
}

export default function LogNfsPrefGyn ({ dataFetch }: IProps): JSX.Element {
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
            <LogNfsePrefGynComponent dataFetch={dataFetch}/>
        </LayoutDefault>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchDataClients()
    const competences = [getCompetenceMain()]

    const paths = []

    for (const client of data) {
        for (const competence of competences) paths.push({ params: { tenant: client.idClient.substring(0, 15), competence } })
    }

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const tenant: string = context.params?.tenant
    const competence: string = context.params?.competence || getCompetenceMain()
    const data = await fetchDataLogNfsPrefGyn(tenant, competence)

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            dataFetch: data
        },
        revalidate: 1800
    }
}