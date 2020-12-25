import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback, SyntheticEvent } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon?: React.ComponentType<IconBaseProps>
    containerStyle?: object
    currency?: boolean
    prefix?: string
}

const DashboardInput: React.FC<InputProps> = ({ containerStyle, icon: Icon, currency, prefix, ...attributes }) => {
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

    const padLeft = useCallback((number: number, quantity: number) => {
        const quantityOfZeros = quantity - String(number).length + 1
        if (quantityOfZeros <= 0) {
            return number
        }

        return Array(quantityOfZeros).join('0') + number
    }, [])

    const handleMask = useCallback((event: SyntheticEvent) => {
        if (currency) {
            console.log('currency')
            const paddedString = String(padLeft(Number(inputRef.current.value.replace('R$', '').replaceAll(',', '').replaceAll('.', '')), 3))

            const decimals = paddedString.slice(paddedString.length - 2)
            const integers = paddedString.slice(0, paddedString.length - 2)

            const formattedIntegers = integers.split(/(?=(?:...)*$)/).join('.')

            inputRef.current.value = formattedIntegers + ',' + decimals
        }
    }, [])

    const handleKeyDown = event => {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const keysPermitted = ['Backspace', 'Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Home', 'End']

        if (!currency || numbers.indexOf(Number(event.key)) >= 0 || keysPermitted.indexOf(event.key) >= 0) {
            return true
        }

        event.preventDefault()
    }

    return (
        <Container style={containerStyle} isErrored={Boolean(error)} isFocused={isFocused} isFilled={isFilled}>
            {Icon && <Icon size={20} />}

            {prefix && <span>{prefix}</span>}

            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleMask}
                onKeyDown={handleKeyDown}
                defaultValue={defaultValue}
                ref={inputRef}
                {...attributes}
            />

            {error && (
                <Error title={error}>
                    <FiAlertCircle color='#c53030' size={20} />
                </Error>
            )}
        </Container>
    )
}

export default DashboardInput
