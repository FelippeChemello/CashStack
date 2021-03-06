import styled, { css } from 'styled-components'
import ReactSelector, { OptionTypeBase, Props as SelectorProps } from 'react-select'

import Tooltip from '../Tooltip'

interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
    isErrored: boolean
}

interface SelectProps extends SelectorProps {
    ref: any
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    border-radius: 10px;
    padding: 5px 10px;
    margin-top: 8px;
    width: 100%;
    border: 2px solid #969cb2;
    color: #666360;

    display: flex;
    align-items: center;

    > div {
        width: 100%;
    }

    .react-select__control,
    .react-select__control--is-focused,
    .react-select__control--menu-is-open {
        border: 0 !important;
        box-shadow: none !important;
    }

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
                color: #363f5f;
            `}
    }

    input {
        flex: 1;
        width: 50px;
        background: transparent;
        border: 0;
        color: #363f5f;

        &::placeholder {
            color: #969cb2;
        }
    }

    > svg {
        color: ${props => (props.isFilled || props.isFocused ? '#4963f4' : '#969CB2')};
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

export const ReactSelect = styled(ReactSelector)<SelectProps>``
