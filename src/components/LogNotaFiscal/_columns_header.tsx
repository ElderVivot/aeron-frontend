import { CellProps } from 'react-table'

import { Box, Button } from '@chakra-ui/react'
import { TFilterProps } from '@common/types/ReactTable'
import { formatDate } from '@common/utils/functions'
import { SelectColumnFilter } from '@components/_ColumnFilter'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        accessor: 'nameCompanie',
        width: '16.1%'
    },
    {
        Header: 'CNPJ/CPF',
        accessor: 'federalRegistration',
        width: '7.1%'
    },
    {
        Header: 'Modelo NF',
        accessor: 'modelNotaFiscal',
        width: '5.1%',
        Cell: ({ value }: ICellProps): string => {
            if (value === '55') return 'NF-e'
            else if (value === '65') return 'NFC-e'
            else if (value === '57') return 'CT-e'
            else return value
        },
        Filter: (props: TFilterProps<object>): JSX.Element => <SelectColumnFilter optionsSelect={{ 55: 'NF-e', 65: 'NFC-e', 57: 'CT-e' }} {...props}/>
    },
    {
        Header: 'Situação NF',
        accessor: 'situationNotaFiscal',
        width: '5.1%',
        Cell: ({ value }: ICellProps): string => {
            if (value === '0') return 'Todos'
            else if (value === '1') return 'Normal'
            else if (value === '2') return 'Cancelada'
            else return value
        },
        Filter: (props: TFilterProps<object>): JSX.Element => <SelectColumnFilter optionsSelect={{ 1: 'Normal', 2: 'Cancelada' }} {...props}/>
    },
    {
        Header: 'Data/Hora Processamento',
        accessor: 'updatedAt',
        width: '8.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy HH:mm:ss'))
    },
    {
        Header: 'Status do Processamento',
        accessor: 'typeLog',
        width: '8.1%',
        Cell: ({ value }: ICellProps): JSX.Element => {
            if (value === 'processing') return <Box bg={'orange.300'} rounded={5} my={0.5} mx={2} fontWeight={500}>Processando</Box>
            else if (value === 'success') return <Box bg={'green.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Concluído</Box>
            else if (value === 'warning') return <Box bg={'purple.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Aviso</Box>
            else if (value === 'error') return <Box bg={'red.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Erro</Box>
            else if (value === 'to_process') return <Box bg={'pink.400'} rounded={5} my={0.5} mx={2} fontWeight={500}>Na Fila</Box>
            else return <Box rounded={5} my={0.5} mx={2} fontWeight={500}>{value}</Box>
        },
        Filter: (props: TFilterProps<object>): JSX.Element => (
            <SelectColumnFilter
                // eslint-disable-next-line camelcase
                optionsSelect={ { processing: 'Processando', success: 'Concluído', warning: 'Aviso', error: 'Erro', to_process: 'Na Fila' }}
                {...props}
            />
        )
    },
    {
        Header: 'Data Início',
        accessor: 'dateStartDown',
        width: '6.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy'))
    },
    {
        Header: 'Data Fim',
        accessor: 'dateEndDown',
        width: '6.1%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): string => (formatDate(value, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", 'dd/MM/yyyy'))
    },
    {
        Header: 'Qtd NF Baixadas',
        accessor: 'qtdNotesDown',
        width: '7.1%'
    },
    {
        Header: 'Informação adicional',
        accessor: 'messageLogToShowUser',
        width: '25.1%'
    },
    {
        Header: 'Print',
        accessor: 'urlPrintLog',
        width: '2.0%',
        disableFilters: true,
        Cell: ({ value }: ICellProps): JSX.Element => {
            return <Button as={'a'}
                href={value} target="_blank" rel="noopener noreferrer"
                isDisabled={!value} rounded={5} my={0.5} mx={2} h={'0'}
            >
                <FontAwesomeIcon icon={faEye} size='sm'/>
            </Button>
        }
    }
]