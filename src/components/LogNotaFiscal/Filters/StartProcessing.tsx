import { FormControl, FormControlProps, FormLabel, Input } from '@chakra-ui/react'

export function StartProcessingComponent (props: FormControlProps): JSX.Element {
    return (
        <FormControl mr={2} {...props}>
            <FormLabel htmlFor='startProcessing' fontSize={'xs'} mb={0.5} >Início Processamento</FormLabel>
            <Input type={'date'} fontSize={'xs'} h={'1.7rem'} pl={2}></Input>
        </FormControl>
    )
}