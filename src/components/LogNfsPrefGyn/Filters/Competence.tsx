import { useRouter } from 'next/router'

import { FormControl, FormControlProps, FormLabel, Select } from '@chakra-ui/react'

import { competencesToDown } from '../_utils'

const optionsCompetence = competencesToDown

export function CompetenceComponent (props: FormControlProps): JSX.Element {
    const router = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const competenceEvent = event.target.value
        router.push({
            pathname: `/[tenant]/LogNfsPrefGyn/${competenceEvent}`,
            query: { tenant: router.query.tenant }
        })
    }

    return (
        <FormControl mr={2} {...props}>
            <FormLabel htmlFor='competence' fontSize={'xs'} mb={0.5}>Competência</FormLabel>
            <Select fontSize={'xs'} h={'1.7rem'} value={router.query.competence} onChange={handleChange}>
                {optionsCompetence.map((optionCompetence, key) => (
                    <option key={key} value={optionCompetence}>
                        {optionCompetence.substring(4)}/{optionCompetence.substring(0, 4)}
                    </option>
                ))}
            </Select>
        </FormControl>
    )
}