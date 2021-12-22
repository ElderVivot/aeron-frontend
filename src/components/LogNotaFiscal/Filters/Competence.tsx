import { FormControl, FormControlProps, FormLabel, Select } from '@chakra-ui/react'

const optionsCompetence = ['202112', '202201']

export function CompetenceComponent (props: FormControlProps): JSX.Element {
    return (
        <FormControl mr={2} {...props}>
            <FormLabel htmlFor='competence' fontSize={'xs'} mb={0.5}>Competência</FormLabel>
            <Select fontSize={'xs'} h={'1.7rem'}>
                {optionsCompetence.map((competence, key) => (
                    <option key={key} value={competence}>{competence.substring(4)}/{competence.substring(0, 4)}</option>
                ))}
            </Select>
        </FormControl>
    )
}