import styled, { css } from 'styled-components'

interface ContainerProps {
    isFocused: boolean
}

interface LabelProps {
    checked: boolean
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    display: flex;
    width: 100%;
    color: #666360;
    margin-top: 8px;

    display: flex;
    align-items: stretch;
    justify-content: space-between;

    .react-select__control,
    .react-select__control--is-focused,
    .react-select__control--menu-is-open {
        border: 0 !important;
        box-shadow: none !important;
    }

    ${props =>
        props.isFocused &&
        css`
            color: #4963f4;
            border-color: #4963f4;
        `}

    span {
        margin-right: 8px;
        color: #969cb2;

        ${props =>
            props.isFocused &&
            css`
                color: #363f5f;
            `}
    }

    input {
        display: none;
    }

    svg {
        margin-right: 10px;
    }
`

export const Label = styled.label<LabelProps>`
    border: 2px solid ${props => (props.checked ? '#4963f4' : '#969CB2')};
    color: ${props => (props.checked ? '#363f5f' : '#969CB2')};
    border-radius: 10px;
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;

    + label {
        margin-left: 10px;
    }
`
