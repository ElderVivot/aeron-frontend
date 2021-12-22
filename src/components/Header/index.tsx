import Link from 'next/link'
import { useRouter } from 'next/router'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    Image,
    BoxProps
} from '@chakra-ui/react'

import { ButtonMenu } from './ButtonMenu'

export function Header (props: BoxProps): JSX.Element {
    const router = useRouter()
    const { tenant } = router.query

    return (
        <Box as="header" {...props} bg={'cyan.300'} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                <HStack spacing={10} alignItems={'center'}>
                    <Link href="/[tenant]" as={`/${tenant}`} passHref={true}>
                        <Image cursor={'pointer'} h={'9%'} w={'9%'} src="/logo.png" alt='Logo'></Image>
                    </Link>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}

                    >
                        <ButtonMenu nameButton='Cadastros'
                            itemsMenu={[
                                {
                                    name: 'Empresas',
                                    hrefLink: '/[tenant]/Companies',
                                    asLink: `/${tenant}/Companies`
                                },
                                {
                                    name: 'Certificados',
                                    hrefLink: '/[tenant]/Certificates',
                                    asLink: `/${tenant}/Certificates`
                                }
                            ]}
                        />
                        <ButtonMenu nameButton='Logs Processamento'
                            itemsMenu={[
                                {
                                    name: 'Notas NFe, NFCe, CTe',
                                    hrefLink: '/[tenant]/LogNotaFiscal',
                                    asLink: `/${tenant}/LogNotaFiscal`
                                }
                            ]}
                        />
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar></Avatar>
                        </MenuButton>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    )
}