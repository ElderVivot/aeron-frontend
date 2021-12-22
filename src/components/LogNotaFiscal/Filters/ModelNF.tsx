import { FormControl, FormLabel, Select } from '@chakra-ui/react'

const optionsModelNF = { 55: 'NF-e', 65: 'NFC-e', 57: 'CT-e' }

export function ModelNFComponent (): JSX.Element {
    return (
        <FormControl>
            <FormLabel htmlFor='modelNF' fontSize={'xs'}>Modelo NF</FormLabel>
            <Select fontSize={'xs'}>
                {Object.entries(optionsModelNF).map(([key, value], index) => (
                    <option key={index} value={key}>{value}</option>
                ))}
            </Select>
        </FormControl>
    )
}