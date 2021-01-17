import styled from 'styled-components'
import { lighten, shade } from 'polished'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background: #fff;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: #fff;
    box-shadow: 0 8px 16px #4963f429;
    z-index: 999;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px;
        width: 1120px;

        a {
            color: #4963f4;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;

            :hover {
                color: ${shade(0.3, '#4963f4')};
            }
        }

        a + a {
            margin-left: 32px;
            border: 2px solid #4963f4;
            padding: 8px 12px;
            border-radius: 32px;

            :hover {
                border: 2px solid ${shade(0.3, '#4963f4')};
            }
        }
    }
`

export const Content = styled.div`
    width: 1120px;
    margin-top: 128px;
    display: flex;
    display: flex;
    flex-direction: row;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        width: 80%;
        font-weight: normal;
        font-size: 36px;

        strong {
            font-weight: bold;
        }
    }

    h2 {
        width: 80%;
        font-weight: normal;
        font-size: 24px;
        margin-top: 16px;
    }
`

export const Img = styled.div`
    margin: 64px 16px;
`

export const Lead = styled.div`
    margin-top: 32px;
    border: 2px solid #4963f4;
    padding: 2px 2px 2px 32px;
    border-radius: 40px;

    input {
        font-size: 18px;
        border: none;
    }

    button {
        border: none;
        padding: 16px 32px;
        border-radius: 32px;
        background: #4963f4;
        color: #fff;
        font-weight: bold;
        letter-spacing: 0.5px;
    }
`
