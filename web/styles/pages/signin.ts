import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 700px;
`

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 370px;
    width: 100%;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 80px 0;
        padding: 10px;
        max-width: 370px;
        width: 100%;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #969cb2;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#969CB2')};
            }
        }
    }

    /* > indica apenas as tags 'a' que vierem diretamente após a div  */
    > a {
        color: #969cb2;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            color: ${shade(0.2, '#969CB2')};
        }

        svg {
            margin-right: 16px;
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url('/signin-background.jpg') no-repeat center;
    background-size: cover;
`
