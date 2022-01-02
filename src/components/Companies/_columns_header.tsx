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
        Header: 'Cód. Empresa',
        accessor: 'codeCompanieAccountSystem',
        width: '5%',
        filter: 'equals'
    },
    {
        Header: 'Nome Empresa',
        accessor: 'name',
        width: '16.1%'
    },
    {
        Header: 'CNPJ/CPF',
        accessor: 'federalRegistration',
        width: '7.1%'
    },
    {
        Header: 'Cidade',
        accessor: 'nameCity',
        width: '5.1%'
    },
    {
        Header: 'UF',
        accessor: 'stateCity',
        width: '3.1%'
    },
    {
        Header: 'Status',
        accessor: 'status',
        width: '6.1%',
        Cell: ({ value }: ICellProps): JSX.Element => {
            if (value === 'ACTIVE') return <Box bg={'green.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Ativa</Box>
            else if (value === 'INACTIVE') return <Box bg={'red.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Inativa</Box>
        },
        Filter: (props: TFilterProps<object>): JSX.Element => (
            <SelectColumnFilter
                optionsSelect={ { ACTIVE: 'Ativa', INACTIVE: 'Inativa' } }
                {...props}
            />
        ),
        filter: 'equals'
    },
    {
        Header: 'Insc. Estadual',
        accessor: 'stateRegistration',
        width: '6.1%'
    },
    {
        Header: 'Insc. Municipal',
        accessor: 'cityRegistration',
        width: '6.1%'
    },
    {
        Header: 'Início Como Cliente',
        accessor: 'dateInicialAsClient',
        width: '6.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy'))
    },
    {
        Header: 'Fim Como Cliente',
        accessor: 'dateFinalAsClient',
        width: '6.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy'))
    },
    {
        Header: 'Regime Empresa',
        accessor: 'taxRegime',
        width: '6.1%',
        Cell: ({ value }: ICellProps): string => {
            if (value === '01') return 'Simples Nacional'
            else if (value === '02') return 'Lucro Presumido'
            else if (value === '03') return 'Lucro Real'
            else if (value === '99') return 'Outros'
        },
        Filter: (props: TFilterProps<object>): JSX.Element => (
            <SelectColumnFilter
                optionsSelect={ { '01': 'Simples Nacional', '02': 'Lucro Presumido', '03': 'Lucro Real', 99: 'Outros' } }
                {...props}
            />
        ),
        filter: 'equals'
    }
]