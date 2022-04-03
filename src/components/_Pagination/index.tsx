import { Box, Button, Input, TableProps as TablePropsChakra } from '@chakra-ui/react'

interface IPropsTable extends TablePropsChakra {
    previousPage: () => void
    nextPage: () => void
    canPreviousPage: boolean
    canNextPage: boolean
    pageOptions: number[]
    pageIndex: number
    gotoPage: (updater: ((pageIndex: number) => number) | number) => void
    pageCount: number
}

export function PaginationComponent (props: IPropsTable): JSX.Element {
    const { previousPage, nextPage, canPreviousPage, canNextPage, pageOptions, pageIndex, gotoPage, pageCount } = props

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'1.5rem'} my={'0.28rem'}>
            <Box as='span' fontSize={'xs'} rounded={5} my={0.5} mx={2} fontWeight={500} textAlign={'center'}>
                Página { ' ' } <strong>{pageIndex + 1 }</strong> de {pageOptions.length}
            </Box>
            <Button fontSize={'xs'} height={'1.5rem'} rounded={5} my={0.5} mx={2} fontWeight={500} textAlign={'center'}
                onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
            <Button fontSize={'xs'} height={'1.5rem'} rounded={5} my={0.5} mx={2} fontWeight={500}
                onClick={() => previousPage()} disabled={!canPreviousPage}>Anterior</Button>
            <Button fontSize={'xs'} height={'1.5rem'} rounded={5} my={0.5} mx={2} fontWeight={500} onClick={() => nextPage()} disabled={!canNextPage}>Próximo</Button>
            <Button fontSize={'xs'} height={'1.5rem'} rounded={5} my={0.5} mx={2} fontWeight={500} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} >{'>>'}</Button>
            <Box as='span' fontSize={'xs'} rounded={5} my={0.5} mx={2} fontWeight={500}>
                Ir para: {' '}
                <Input height={'1.5rem'} w={'50px'} fontSize={'xs'} rounded={5} my={0.5} mx={2} fontWeight={500} textAlign={'center'}
                    type="number" defaultValue={pageIndex + 1}
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                />
            </Box>
        </Box>
    )
}