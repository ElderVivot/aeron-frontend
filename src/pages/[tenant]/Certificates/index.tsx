import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

import { fetchDataClients } from '@api/public/Client'
import { fetchDataCertificates } from '@api/tenant/Certificates'
import { ICertificate } from '@api/tenant/Certificates/ICertificate'
import { Heading } from '@chakra-ui/react'
import { LayoutDefault } from '@components/_LayoutDefault'
import { Certificates as CertificatesComponent } from '@components/Certificates'

interface IProps extends PropsWithChildren<object> {
    dataFetch: ICertificate[]
}

export default function Certificates({ dataFetch }: IProps): JSX.Element {
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
            <CertificatesComponent dataFetch={dataFetch}></CertificatesComponent>
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
    const data = await fetchDataCertificates(tenant)

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