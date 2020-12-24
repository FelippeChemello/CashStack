import styled from 'styled-components'
import { mix } from 'polished'

interface ItemProps {
    selected: boolean
}

export const Container = styled.div`
    display: flex;
`

export const Item = styled.a<ItemProps>`
    padding: 10px;
    color: ${props => (props.selected ? '#fff' : '#9BABF7')};
    ${props => (props.selected ? 'border-bottom: 3px solid #fff;' : '')};
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.2s, border-bottom 0.2s;

    &:hover {
        color: ${props => (props.selected ? '#fff' : mix(0.5, '#9BABF7', '#fff'))};
        border-bottom: ${props => (props.selected ? '3px solid #fff;' : `3px solid ${mix(0.5, '#9BABF7', '#fff')}`)};
    }

    + a {
        margin-left: 10px;
    }
`
