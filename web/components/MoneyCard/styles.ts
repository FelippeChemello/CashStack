import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    color: #363f5f;
    height: 70px;
    border-radius: 10px;
    border: 0;
    padding: 16px 24px;
    width: 180px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    p {
        font-size: 10px;
        font-weight: 400;
    }

    strong {
        font-size: 21px;
        align-self: flex-start;
    }
`
