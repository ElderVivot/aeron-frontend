import { CellProps } from 'react-table'

import { Box } from '@chakra-ui/react'
import { TFilterProps } from '@common/types/ReactTable'
import { formatDate } from '@common/utils/functions'
import { SelectColumnFilter } from '@components/_ColumnFilter'

interface ICellProps extends CellProps<any> {
    value: string
}

export const columnsHeader = [
    {
        Header: 'Nome Certificado',
        accessor: 'nameCert',
        width: '16.1%'
    },
    {
        Header: 'CNPJ/CPF',
        accessor: 'federalRegistration',
        width: '7.1%'
    },
    {
        Header: 'Status Certificado',
        accessor: 'statusCert',
        width: '6.1%',
        Cell: ({ value }: ICellProps): JSX.Element => {
            if (value === 'ACTIVE') return <Box bg={'green.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Ativo</Box>
            else if (value === 'OVERDUE') return <Box bg={'red.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Vencido</Box>
        },
        Filter: (props: TFilterProps<object>): JSX.Element => (
            <SelectColumnFilter
                optionsSelect={ { ACTIVE: 'Ativo', OVERDUE: 'Vencido' } }
                {...props}
            />
        ),
        filter: 'equals'
    },
    {
        Header: 'Cód. Empresa',
        accessor: 'codeCompanieAccountSystem',
        width: '5%',
        filter: 'equals'
    },
    // {
    //     Header: 'Tipo Cert',
    //     accessor: 'eCpfCnpj',
    //     width: '3.1%',
    //     Cell: ({ value }: ICellProps): JSX.Element => {
    //         if (value === 'eCPF') return <Box rounded={5} my={0.5} mx={2} fontWeight={500}>CPF</Box>
    //         else if (value === 'eCNPJ') return <Box rounded={5} my={0.5} mx={2} fontWeight={500}>CNPJ</Box>
    //     },
    //     Filter: (props: TFilterProps<object>): JSX.Element => (
    //         <SelectColumnFilter
    //             optionsSelect={ { eCPF: 'CPF', eCNPJ: 'CNPJ' } }
    //             {...props}
    //         />
    //     ),
    //     filter: 'equals'
    // },
    {
        Header: 'Status Empresa',
        accessor: 'statusCompanie',
        width: '6.1%',
        Cell: ({ value }: ICellProps): JSX.Element => {
            if (value === 'ACTIVE') return <Box bg={'green.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Ativa</Box>
            else if (value === 'INACTIVE') return <Box bg={'red.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Inativa</Box>
            else return <Box bg={'yellow.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Não Encontrado</Box>
        },
        Filter: (props: TFilterProps<object>): JSX.Element => (
            <SelectColumnFilter
                optionsSelect={ { ACTIVE: 'Ativa', INACTIVE: 'Inativa', DONT_FIND: 'Não Encontrado' } }
                {...props}
            />
        ),
        filter: 'equals'
    },
    {
        Header: 'Atualizado em',
        accessor: 'updatedAt',
        width: '6.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy HH:mm'))
    },
    {
        Header: 'Início Validade',
        accessor: 'startDateValidity',
        width: '6.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy'))
    },
    {
        Header: 'Fim Validade',
        accessor: 'endDateValidity',
        width: '6.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy'))
    }
    // {
    //     Header: 'Ações',
    //     accessor: 'stateRegistration',
    //     width: '6.1%'
    // }
]