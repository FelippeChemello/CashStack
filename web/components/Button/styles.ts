import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface ContainerProps {
    disabled: boolean
}

export const Container = styled.button<ContainerProps>`
    background: #4963f4;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${shade(0.2, '#4963F4')};
    }

    ${props =>
        props.disabled &&
        css`
            background-color: ${shade(0.2, '#4963F4')};
            cursor: default;
        `}
`
