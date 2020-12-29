import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback, SyntheticEvent } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'

import { Container, Error, Label } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    options: {
        id: string
        value: string
        label: string
        icon?: React.ComponentType<IconBaseProps>
        iconColor?: string
    }[]
    containerStyle?: object
    setter?: (value: any) => void
}

const CheckboxInput: React.FC<Props> = ({ name, options, containerStyle, setter, ...attributes }) => {
    const { fieldName, defaultValue, error, registerField } = useField(name)
    const inputRefs = useRef<HTMLInputElement[]>([])
    const [isFocused, setIsFocused] = useState(false)
    const [isSelected, setIsSelected] = useState(options[0].id)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRefs.current,
            getValue: (refs: HTMLInputElement[]) => {
                return refs.filter(ref => ref.checked).map(ref => ref.value)
            },
            clearValue: (refs: HTMLInputElement[]) => {
                refs.forEach(ref => {
                    ref.checked = false
                })
            },
            setValue: (refs: HTMLInputElement[], values: string[]) => {
                refs.forEach(ref => {
                    if (values.includes(ref.id)) {
                        ref.checked = true
                    }
                })
            },
        })
    }, [defaultValue, fieldName, registerField])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)
    }, [])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    const handleSelect = useCallback((inputId: string) => {
        setIsSelected(inputId)

        if (typeof setter === 'function') {
            setter(inputId)
        }
    }, [])

    return (
        <Container style={containerStyle} isFocused={isFocused}>
            {options.map(({ icon: Icon, ...option }, index) => (
                <Label htmlFor={option.id} key={option.id} checked={option.id === isSelected}>
                    <input
                        checked={option.id === isSelected}
                        ref={ref => {
                            inputRefs.current[index] = ref as HTMLInputElement
                        }}
                        value={option.value}
                        type='checkbox'
                        id={option.id}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={() => handleSelect(option.id)}
                        {...attributes}
                    />
                    {Icon && <Icon size={24} color={option.iconColor} />}
                    {option.label}
                </Label>
            ))}
        </Container>
    )
}

export default CheckboxInput
