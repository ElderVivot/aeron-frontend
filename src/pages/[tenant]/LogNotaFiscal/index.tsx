import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Heading } from '@chakra-ui/react'
import { LayoutDefault } from '@components/_LayoutDefault'
import { LogNotaFiscal as LogNotaFiscalComponent } from '@components/LogNotaFiscal'
import { LogNotaFiscalProvider } from '@context/tenant/LogNotaFiscal'

export default function LogNotesGoias (): JSX.Element {
    const router = useRouter()

    const [tenant, setTenant] = useState('')
    useEffect(() => {
        setTenant(router.query.tenant)
    }, [router.query.tenant])

    if (!tenant) {
        return (
            <LayoutDefault>
                <Heading as='h3' size='md'>Carregando...</Heading>
            </LayoutDefault>
        )
    }

    return (
        <LayoutDefault>
            <LogNotaFiscalProvider>
                <LogNotaFiscalComponent tenant={tenant}/>
            </LogNotaFiscalProvider>
        </LayoutDefault>
    )
}