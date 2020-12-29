import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
    isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-top: 8px;
    width: 100%;
    border: 2px solid #969cb2;
    color: #666360;

    display: flex;
    align-items: center;

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            color: #4963f4;
            border-color: #4963f4;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #4963f4;
        `}

    span {
        margin-right: 8px;
        color: #969cb2;

        ${props =>
            (props.isFocused || props.isFilled) &&
            css`
                color: #4963f4;
            `}
    }

    input {
        flex: 1;
        width: 50px;
        background: transparent;
        border: 0;
        color: ${props => (props.isFocused || props.isFilled ? '#363f5f' : '#969cb2')};

        &::placeholder {
            color: #969cb2;
        }

        ::-webkit-calendar-picker-indicator {
            filter: ${props =>
                props.isFilled || props.isFocused
                    ? 'invert(35%) sepia(97%) saturate(3350%) hue-rotate(223deg) brightness(99%) contrast(93%)'
                    : 'invert(75%) sepia(9%) saturate(594%) hue-rotate(190deg) brightness(83%) contrast(84%)'};

            // Cores obtidas através da seguinte técnica https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters
        }
    }

    svg {
        margin-right: 8px;
        color: #969cb2;

        ${props =>
            (props.isFocused || props.isFilled) &&
            css`
                color: #4963f4;
            `}
    }
`

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 10px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`
