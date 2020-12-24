import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useField } from '@unform/core'
import { FiAlertCircle, FiMail } from 'react-icons/fi'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon?: React.ComponentType<IconBaseProps>
    containerStyle?: object
}

const Input: React.FC<InputProps> = ({ containerStyle, icon: Icon, ...attributes }) => {
    const { fieldName, defaultValue, error, registerField } = useField(attributes.name)
    const inputRef = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)

        setIsFilled(Boolean(inputRef.current?.value))
    }, [])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    return (
        <Container style={containerStyle} isErrored={Boolean(error)} isFocused={isFocused} isFilled={isFilled}>
            {Icon && <Icon size={20} />}

            <input onFocus={handleInputFocus} onBlur={handleInputBlur} defaultValue={defaultValue} ref={inputRef} {...attributes} />

            {error && (
                <Error title={error}>
                    <FiAlertCircle color='#c53030' size={20} />
                </Error>
            )}
        </Container>
    )
}

export default Input
