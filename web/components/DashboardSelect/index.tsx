import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback, SyntheticEvent } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'

import { Container, Error } from './styles'

interface InputProps extends SelectProps {
    name: string
    containerStyle?: object
}

const DashboardSelect: React.FC<InputProps> = ({ containerStyle, ...attributes }) => {
    const { fieldName, defaultValue, error, registerField } = useField(attributes.name)
    const inputRef = useRef<HTMLInputElement>(null)
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

        setIsFilled(Boolean(inputRef.current?.value))
    }, [])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 20,
        }),

        control: (_, { selectProps: { width } }) => ({
            width: width,
        }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1
            const transition = 'opacity 300ms'

            return { ...provided, opacity, transition }
        },
    }

    return (
        <Container style={containerStyle} isErrored={Boolean(error)} isFocused={isFocused} isFilled={isFilled}>
            <ReactSelect
                defaultValue={defaultValue}
                ref={inputRef}
                classNamePrefix='react-select'
                placeholder='Selecione...'
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                styles={customStyles}
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
