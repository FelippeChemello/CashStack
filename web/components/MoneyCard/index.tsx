import React, { IconBaseProps } from 'react'
import ReactLoading from 'react-loading'

import { Container } from './styles'

type CardProps = {
    title: string
    value: string
    icon: React.ComponentType<IconBaseProps>
    iconColor: string
}

const Button: React.FC<CardProps> = ({ title, value, icon: Icon, iconColor }: CardProps) => {
    return (
        <Container>
            <div>
                <p>{title}</p>
                <Icon size={32} color={iconColor} />
            </div>

            <strong>R$ {value}</strong>
        </Container>
    )
}

export default Button
