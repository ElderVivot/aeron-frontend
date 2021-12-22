import { Flex, FlexProps } from '@chakra-ui/react'

import { CompetenceComponent } from './Competence'
import { EndProcessingComponent } from './EndProcessing'
// import { ModelNFComponent } from './ModelNF'
// import { SituationNFComponent } from './SituationNF'
import { StartProcessingComponent } from './StartProcessing'

export function FilterComponent (props: FlexProps): JSX.Element {
    return (
        <Flex {...props} w={'50vw'} mt={5} mb={3.5} >
            <CompetenceComponent flexBasis={'20%'} maxW={'140px'} zIndex={-1}/>
            <StartProcessingComponent flexBasis={'40%'} maxW={'220px'} zIndex={-1}/>
            <EndProcessingComponent flexBasis={'40%'} maxW={'220px'} zIndex={-1}/>
            {/* <ModelNFComponent/>
            <SituationNFComponent/> */}
        </Flex>
    )
}