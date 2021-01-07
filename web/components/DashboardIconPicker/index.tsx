import React, { useState, useEffect, useRef, useMemo } from 'react'
import { IconBaseProps } from 'react-icons'
import * as featherIcons from 'react-icons/fi'
import { useField } from '@unform/core'

import { AppInput, PickerContainer, Container } from './styles'
import IconPickerItem from './IconPickerItem'

interface IconPickerProps {
    name: string
}

type IconList = Array<React.ComponentType<IconBaseProps>>

const iconListComplete = { ...featherIcons }

const IconPicker: React.FC<IconPickerProps> = ({ name }) => {
    const { fieldName, defaultValue, error, registerField } = useField(name)
    const containerRef = useRef(null)
    const pickerRef = useRef<HTMLInputElement>(null)
    const [display, changeDisplay] = useState(false)
    const [searchString, setSearchString] = useState('')
    const [selectedIcon, setSelectedIcon] = useState<string>('FiDollarSign')
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                changeDisplay(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [containerRef])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: pickerRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    const buttonClick = () => changeDisplay(!display)

    const onChangeSearch = (event: any) => {
        setSearchString(event.target.value)
    }

    const iconList = useMemo<IconList>(() => {
        const regExpSearch = Boolean(searchString) ? new RegExp('.*' + searchString, 'gi') : new RegExp(/.*/gi)
        const fiIcons = Object.keys(iconListComplete)
            .filter(iconName => Boolean(iconName.match(regExpSearch)))
            .map(iconNameFiltered => featherIcons[iconNameFiltered])

        return fiIcons
    }, [searchString])

    return (
        <Container ref={containerRef} onClick={() => buttonClick()} changed={changed}>
            <input type='hidden' ref={pickerRef} value={selectedIcon} />

            {React.createElement(iconListComplete[selectedIcon])}

            {display && (
                <PickerContainer onClick={e => e.stopPropagation()}>
                    {<AppInput onChange={onChangeSearch} value={searchString} placeholder='Search' />}
                    {iconList.map(icon => (
                        <IconPickerItem
                            key={icon.name}
                            icon={icon}
                            onClick={icon => {
                                setChanged(true)
                                setSelectedIcon(icon)
                                changeDisplay(false)
                                setSearchString('')
                            }}
                        />
                    ))}
                </PickerContainer>
            )}
        </Container>
    )
}

export default IconPicker
