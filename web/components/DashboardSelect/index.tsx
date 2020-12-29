import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback, SyntheticEvent } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'

import { Container, Error } from './styles'

interface InputProps extends SelectProps {
    name: string
    containerStyle?: object
    icon?: React.ComponentType<IconBaseProps>
}

const DashboardSelect: React.FC<InputProps> = ({ containerStyle, icon: Icon, ...attributes }) => {
    const { fieldName, defaultValue, error, registerField } = useField(attributes.name)
    const inputRef = useRef<SelectProps>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue: (ref: any) => {
                if (attributes.isMulti) {
                    if (!ref.state.value) {
                        return []
                    }
                    return ref.state.value.map((option: OptionTypeBase) => option.value)
                }
                if (!ref.state.value) {
                    return ''
                }
                return ref.state.value.value
            },
        })
    }, [fieldName, registerField])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)

        setIsFilled(Boolean(inputRef.current?.state?.value?.value))
    }, [])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    return (
        <Container style={containerStyle} isErrored={Boolean(error)} isFocused={isFocused} isFilled={isFilled}>
            {Icon && <Icon size={24} />}

            <ReactSelect
                defaultValue={defaultValue}
                ref={inputRef}
                classNamePrefix='react-select'
                placeholder='Selecione...'
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
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

export default DashboardSelect
