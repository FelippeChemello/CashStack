import styled from 'styled-components'

interface ContainerProps {
    mode: 'dark' | 'light' | 'blue'
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    font-size: 42px;
    color: ${props => (props.mode === 'dark' ? '#363f5f' : props.mode === 'blue' ? '#4963f4' : '#fff')};
    font-weight: bold;
    font-family: 'Nunito';

    > span {
        margin-left: 16px;
    }
`
