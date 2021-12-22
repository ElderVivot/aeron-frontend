import Link from 'next/link'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, Button, MenuList, MenuItem, MenuButtonProps } from '@chakra-ui/react'

interface IItemsMenu {
    name: string
    hrefLink: string
    asLink: string
}

interface IProps extends MenuButtonProps {
    nameButton: string
    itemsMenu: IItemsMenu[]
}

export function ButtonMenu (props: IProps): JSX.Element {
    const { nameButton, itemsMenu } = props
    return (
        <Menu >
            <MenuButton
                bgColor={'cyan.100'}
                _hover={{ backgroundColor: 'cyan.400' }}
                _expanded={{ backgroundColor: 'cyan.400' }}
                as={Button}
                cursor={'pointer'}
                rightIcon={<ChevronDownIcon />}
            >
                {nameButton}
            </MenuButton>
            <MenuList bgColor={'white'} zIndex={'dropdown'} position={'relative'}>
                {itemsMenu.map((obj, key) => (
                    <MenuItem
                        key={key}
                        _hover={{ backgroundColor: 'cyan.400' }}
                    >
                        <Link href={obj.hrefLink} as={obj.asLink}>{obj.name}</Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}