import { FormControl, FormControlProps, FormLabel, Select } from '@chakra-ui/react'
import { useDataPageLogNotaFiscal } from '@context/tenant/LogNotaFiscal'

const optionsCompetence = ['202112', '202201']

export function CompetenceComponent (props: FormControlProps): JSX.Element {
    const { dataPage, setDataPage } = useDataPageLogNotaFiscal()

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDataPage({ competence: event.target.value })
    }

    return (
        <FormControl mr={2} {...props}>
            <FormLabel htmlFor='competence' fontSize={'xs'} mb={0.5}>Competência</FormLabel>
            <Select fontSize={'xs'} h={'1.7rem'} value={dataPage.competence} onChange={handleChange}>
                {optionsCompetence.map((competence, key) => (
                    <option key={key} value={competence}>
                        {competence.substring(4)}/{competence.substring(0, 4)}
                    </option>
                ))}
            </Select>
        </FormControl>
    )
}