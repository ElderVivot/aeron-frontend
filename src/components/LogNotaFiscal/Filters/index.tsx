import { Flex, FlexProps } from '@chakra-ui/react'

import { CompetenceComponent } from './Competence'
// import { EndProcessingComponent } from './EndProcessing'
// import { ModelNFComponent } from './ModelNF'
// import { SituationNFComponent } from './SituationNF'
// import { StartProcessingComponent } from './StartProcessing'

export function FilterComponent (props: FlexProps): JSX.Element {
    return (
        <Flex {...props} w={'50vw'} my={2} >
            <CompetenceComponent flexBasis={'20%'} maxW={'140px'}/>
            {/* <StartProcessingComponent flexBasis={'40%'} maxW={'220px'}/>
            <EndProcessingComponent flexBasis={'40%'} maxW={'220px'}/> */}
            {/* <ModelNFComponent/>
            <SituationNFComponent/> */}
        </Flex>
    )
}