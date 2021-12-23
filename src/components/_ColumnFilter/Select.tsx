import { Select } from '@chakra-ui/react'
import { TFilterProps } from '@common/types/ReactTable'

export function SelectColumnFilter (props: TFilterProps<object>): JSX.Element {
    const { column: { filterValue, setFilter }, optionsSelect } = props

    return (
        <Select bgColor={'white'} fontSize={'fs'} height={6} textAlign={'center'} p={0} iconSize='xs' size={'xs'}
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
        >
            <option value="">Todos</option>
            {Object.entries(optionsSelect).map(([key, value], index) => (
                <option key={index} value={key}>{value}</option>
            ))}
        </Select>
    )
}