import { TableBodyProps, TableBodyPropGetter, Row } from 'react-table'

import { Tbody, Tr, Td } from '@chakra-ui/react'

interface IProps extends TableBodyProps{
    getTableBodyProps: (propGetter?: TableBodyPropGetter<object>) => TableBodyProps
    rows: Row<object>[]
    prepareRow: (row: Row<object>) => void
}

export function TBodyComponent (props: IProps): JSX.Element {
    return (
        <Tbody {...props.getTableBodyProps()} zIndex={-1}>
            {props.rows.map((row, key) => {
                props.prepareRow(row)
                return (
                    <Tr key={key} {...row.getRowProps()} zIndex={-1} bgColor={key % 2 === 0 ? '' : 'palette.2.2'} _hover={{ backgroundColor: 'palette.2' }}>
                        {row.cells.map((cell, key) => (
                            <Td key={key} padding={0.3} fontSize={'fs'} textAlign={'center'} fontWeight={400}
                                maxW={cell.column.width} minW={cell.column.width} w={cell.column.width}
                                border={'1px solid #718096'} zIndex={0}
                                {...cell.getCellProps()}
                            >
                                {cell.render('Cell')}
                            </Td>
                        ))}
                    </Tr>
                )
            })}
        </Tbody>
    )
}