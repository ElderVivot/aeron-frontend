import { FormControl, FormControlProps, FormLabel, Input } from '@chakra-ui/react'

export function EndProcessingComponent (props: FormControlProps): JSX.Element {
    return (
        <FormControl {...props}>
            <FormLabel htmlFor='endProcessing' fontSize={'xs'} mb={0.5}>Fim Processamento</FormLabel>
            <Input type={'date'} fontSize={'xs'} h={'1.7rem'} pl={2}></Input>
        </FormControl>

    )
}