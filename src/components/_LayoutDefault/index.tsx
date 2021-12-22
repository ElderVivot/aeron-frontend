import { PropsWithChildren } from 'react'

import { Grid, Box } from '@chakra-ui/react'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

export function LayoutDefault (props: PropsWithChildren<object>): JSX.Element {
    return (
        <Grid
            height={'100vh'}
            templateColumns='1fr'
            templateRows='64px 1fr 16px'
            templateAreas="
                'header'
                'main'
                'footer'
            "
        >
            <Header gridArea='header' position={'fixed'} width={'100%'}/>
            <Box as={'main'} gridArea='main' width={'99.2vw'}>{props.children}</Box>
            <Footer gridArea='footer' position={'fixed'} bottom={0} width={'100%'}/>
        </Grid>
    )
}