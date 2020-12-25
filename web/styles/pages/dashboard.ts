import { shade } from 'polished'
import styled from 'styled-components'

interface ValueProps {
    greaterThanZero: boolean
}

export const Container = styled.div``

export const Header = styled.header`
    padding: 32px;
    height: 240px;
    background: #4963f4;
`

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
        height: 80px;
    }

    > div.menu {
        margin-left: auto;

        button {
            background: transparent;
            border: 0;

            svg {
                color: #fff;
                width: 20px;
                height: 20px;
            }
        }
    }

    + h1 {
        margin: 0 auto;
        margin-top: 14px;
        width: 1120px;
        font-size: 24px;
        font-weight: medium;
        color: #fff;
    }
`

export const UpperContent = styled.main`
    max-width: 1120px;
    margin: 64px auto;
    display: flex;
`

export const Categories = styled.div`
    flex: 1;
    margin-right: 48px;

    p {
        margin-top: 8px;
        color: #ff9000;
        display: flex;
        align-items: center;
        font-weight: 500;

        span {
            display: flex;
            align-items: center;
        }

        span + span::before {
            content: '';
            background: #ff9000;
            width: 1px;
            height: 12px;
            margin: 0 8px;
        }
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    img {
        width: 32px;
    }

    h1 {
        margin-left: 10px;
        font-size: 32px;
    }
`

export const Description = styled.div`
    flex: 1;
    padding: 0 32px;
    margin-top: 4px;

    display: grid;
    grid-template-columns: 140px 135px 190px 120px auto;
    column-gap: 1em;

    span + span {
        text-align: center;
    }
`

export const Category = styled.div`
    flex: 1;
    padding: 16px 32px;
    margin-top: 4px;
    border-radius: 10px;
    background-color: #fff;

    display: grid;
    grid-template-columns: 136px 135px 190px 120px auto;
    column-gap: 1em;

    + div {
        margin-top: 8px;
    }

    span {
        text-align: center;
    }

    svg {
        color: #363f5f;
    }
`

export const Total = styled.div`
    flex: 1;
    padding: 4px 32px;
    margin-top: 4px;
    border-radius: 10px;
    background-color: #fff;

    display: grid;
    grid-template-columns: 136px 130px 200px 130px auto;
    column-gap: 1em;

    > div {
        display: flex;
        justify-content: center;
        flex-direction: column;

        > div {
            display: flex;
            align-items: center;
            flex-direction: row;
        }
    }

    div.data > strong {
        margin: 0 auto;
    }

    svg {
        color: #363f5f;
        margin-left: 4px;
        stroke-width: 1.5px;
    }
`

export const Value = styled.span<ValueProps>`
    color: ${props => (props.greaterThanZero ? '#12A454' : '#E83F5B')};
    margin: 0 auto;
`

export const InputArea = styled.aside`
    flex: 1;
    margin: 0;
    background-color: #fff;
    border-radius: 10px;
    padding: 16px 24px;

    display: flex;
    flex-direction: column;
`
