import React from 'react'

import { Container, Item } from './styles'

import { useMenu, MenuTypes } from '../../hooks/Menu'

export default function Menu() {
    const { menuSelected, setMenuSelected } = useMenu()

    const menus = ['Dashboard', 'Investimentos', 'Perfil'] as MenuTypes[]

    return (
        <Container>
            {menus.map(menu => (
                <Item key={menu} selected={menu === menuSelected} onClick={() => setMenuSelected(menu)}>
                    {menu}
                </Item>
            ))}
        </Container>
    )
}
