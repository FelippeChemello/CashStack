import * as React from 'react'
import { IconBaseProps } from 'react-icons'
import * as CSS from 'csstype'

interface IconPickerItemProps {
    icon: React.ComponentType<IconBaseProps>
    size?: number
    color?: string
    onClick?: (icon: string) => void
}

const IconPickerItem: React.FC<IconPickerItemProps> = ({ icon, size, color, onClick }) => {
    const iconDiv = Boolean(icon) ? React.createElement(icon) : <div />

    return <div onClick={() => !!onClick && onClick(icon.name)}>{iconDiv}</div>
}

export default IconPickerItem
