import { Flex, FlexProps } from '@chakra-ui/react'

import { CompetenceComponent } from './Competence'

export function FilterComponent (props: FlexProps): JSX.Element {
    return (
        <Flex {...props} w={'50vw'} my={2} >
            <CompetenceComponent flexBasis={'20%'} maxW={'140px'}/>
        </Flex>
    )
}