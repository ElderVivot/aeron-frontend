import { BoxProps, chakra, Flex, Text } from '@chakra-ui/react'

export function Footer (props: BoxProps): JSX.Element {
    return (
        <Flex as={'footer'} {...props} bgColor={'palette.3'} justifyContent={'flex-end'} pr={10}>
            <Text fontSize={'xs'}>
                Desenvolvido com <chakra.span role="img" aria-label="heart">❤️</chakra.span> por <strong><i>Aeron Soluttions</i></strong>
            </Text>
        </Flex>
    )
}