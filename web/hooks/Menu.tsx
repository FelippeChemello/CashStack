import React, { createContext, useCallback, useContext, useState } from 'react'

export type MenuTypes = 'Dashboard' | 'Investimentos' | 'Perfil'

interface MenuContextInterface {
    menuSelected: 'Dashboard' | 'Investimentos' | 'Perfil'
    setMenuSelected(menu: 'Dashboard' | 'Investimentos' | 'Perfil'): void
}

const MenuContext = createContext<MenuContextInterface>({} as MenuContextInterface)

export const MenuProvider: React.FC = ({ children }) => {
    const [menuSelected, setMenuSelected] = useState<MenuTypes>('Dashboard')

    return <MenuContext.Provider value={{ menuSelected, setMenuSelected }}>{children}</MenuContext.Provider>
}

export function useMenu(): MenuContextInterface {
    const context = useContext(MenuContext)

    return context
}
