import { Thead, Tr, Th, TableHeadProps, chakra, Flex, Box } from '@chakra-ui/react'
import { THeaderGroup } from '@common/types/ReactTable'
import { faArrowCircleUp, faArrowCircleDown, faArrowsAltV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps extends TableHeadProps {
    headerGroups: THeaderGroup<object>[]
}

export function THeadComponent (props: IProps): JSX.Element {
    console.log(props)
    return (
        <Thead>
            {props.headerGroups.map((headerGroup, key) => (
                <Tr key={key} bg={'gray.100'} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, key) => (
                        <Th key={key} padding={0.3} fontSize={'fs'} textAlign={'center'} textTransform={'none'} h={'3.5rem'}
                            maxW={column.width} minW={column.width} w={column.width}
                            border={'1px solid #718096'}
                        >
                            <Flex h={'3.5rem'} direction={'column'} justifyContent={column.disableFilters ? 'center' : 'flex-end'} alignItems={'center'}>
                                <Flex justifyContent={'center'} alignItems={'center'}>
                                    {column.render('Header')}
                                    <chakra.span ml={1} {...column.getHeaderProps(column.getSortByToggleProps())} title='Clique aqui pra ordenar'>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? (<FontAwesomeIcon icon={faArrowCircleDown} size='sm'/>)
                                                : (<FontAwesomeIcon icon={faArrowCircleUp} size='sm'/>)
                                            : (<FontAwesomeIcon icon={faArrowsAltV} size='sm' />)}
                                    </chakra.span>
                                </Flex>
                                <Box w={'98%'} >{column.disableFilters ? null : column.render('Filter')}</Box>
                            </Flex>
                        </Th>
                    ))}
                </Tr>
            ))}
        </Thead>
    )
}