import Link from 'next/link'
import { useRouter } from 'next/router'

import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image
} from '@chakra-ui/react'

export default function Header (): JSX.Element {
    const router = useRouter()
    const { tenant } = router.query

    return (
        <>
            <Box bg={'gray.100'} px={4} as="header">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={10} alignItems={'center'}>
                        <Link href="/[tenant]" as={`/${tenant}`} passHref={true}>
                            <Image cursor={'pointer'} h={'40px'} w={'130px'} src="/logo.png" alt='Logo'></Image>
                        </Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    cursor={'pointer'}
                                    rightIcon={<ChevronDownIcon />}>
                                    Cadastros
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <Link href="/[tenant]/Companies" as={`/${tenant}/Companies`}>Empresas</Link>
                                    </MenuItem>
                                    {/* <MenuItem>Certificados</MenuItem> */}
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    cursor={'pointer'}
                                    rightIcon={<ChevronDownIcon />}
                                >
                                    Logs Processamento
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <Link href="/[tenant]/LogNotesGO" as={`/${tenant}/LogNotesGO`}>Notas de GO</Link>
                                    </MenuItem>
                                    {/* <MenuItem>
                                        <Link href="/[tenant]/LogNotesGoiania" as={`/${tenant}/LogNotesGoiania`}>Notas de Goiânia</Link>
                                    </MenuItem> */}
                                </MenuList>
                            </Menu>
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
        </>
    )
}