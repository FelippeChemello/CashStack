import styled from 'styled-components'
import { lighten } from 'polished'

interface ContainerProps {
    changed: boolean
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }

    :after {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 0 0;
        border-color: transparent #969cb2 transparent transparent;
        right: 0;
        bottom: 5px;
        position: absolute;
    }

    > svg {
        color: ${props => (props.changed ? '#4963f4' : '#969cb2')};
        width: 32px;
        height: 100%;
    }
`

export const PickerContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    background-color: #fff;
    padding: 5px;
    width: 320px;
    max-height: 300px;
    border-radius: 4px;
    border-width: 2px;
    border-color: #363f5f;
    border-style: solid;
    border-radius: 10px;
    z-index: 10;

    svg {
        color: #969cb2;
    }

    div {
        margin: 8px;
        height: 32px;
        width: 32px;
        font-size: 32px;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 10px 10px #969cb2;
        border: solid 5px transparent;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 10px 10px #363f5f;
        border: solid 3px transparent;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        box-shadow: inset 0 0 10px 10px ${lighten(0.2, '#363f5f')};
    }
`

export const AppInput = styled.input`
    background: #fff;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 8px;
    width: 100%;
    border: 2px solid #969cb2;
    color: #666360;
`
