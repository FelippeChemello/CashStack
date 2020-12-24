import styled from 'styled-components'

interface ContainerProps {
    mode: 'dark' | 'light'
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    font-size: 42px;
    color: ${props => (props.mode === 'dark' ? '#363f5f' : '#fff')};
    font-weight: bold;
    font-family: 'Nunito';

    > img {
        margin-right: 16px;
    }
`
