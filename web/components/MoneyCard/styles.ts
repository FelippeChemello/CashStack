import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    color: #363f5f;
    min-height: 140px;
    border-radius: 10px;
    border: 0;
    padding: 16px 24px;
    width: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    + div {
        margin-left: 48px;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    p {
        font-size: 18px;
        font-weight: 400;
    }

    strong {
        font-size: 36px;
        align-self: flex-start;
    }
`
