import { FormControl, FormLabel, Select } from '@chakra-ui/react'

const statusNF = { 1: 'Normal', 2: 'Cancelada' }

export function SituationNFComponent (): JSX.Element {
    return (
        <FormControl>
            <FormLabel htmlFor='statusNF' fontSize={'xs'}>Situação NF</FormLabel>
            <Select fontSize={'xs'}>
                {Object.entries(statusNF).map(([key, value], index) => (
                    <option key={index} value={key}>{value}</option>
                ))}
            </Select>
        </FormControl>
    )
}