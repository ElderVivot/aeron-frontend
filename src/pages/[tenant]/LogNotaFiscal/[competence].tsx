import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

import { fetchDataClients } from '@api/public/Client'
import { fetchDataLogNotaFiscal } from '@api/tenant/LogNotaFiscal'
import { ILogNotaFiscal } from '@api/tenant/LogNotaFiscal/ILogNotaFiscal'
import { Heading } from '@chakra-ui/react'
import { LayoutDefault } from '@components/_LayoutDefault'
import { LogNotaFiscal as LogNotaFiscalComponent } from '@components/LogNotaFiscal'
import { getCompetenceMain, getCompetenceMainSubTwo } from '@components/LogNotaFiscal/_utils'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ILogNotaFiscal[]
}

export default function LogNotesGoias({ dataFetch }: IProps): JSX.Element {
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
            <LogNotaFiscalComponent dataFetch={dataFetch} />
        </LayoutDefault>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchDataClients()
    const competences = [getCompetenceMain(), getCompetenceMainSubTwo()]

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
    const data = await fetchDataLogNotaFiscal(tenant, competence)

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            dataFetch: data
        },
        revalidate: 60 * 20
    }
}