import styled from "styled-components"

export const ModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 95%;
    height: 300px;
    max-width: 420px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    box-shadow: var(--primary) 0px 3px 8px;
    z-index: 999;
    background: #fff;
    border-radius: 10px;

    .close {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    img {
        width: 100px;
        height: 100px;
        margin: 30px 0 20px 0;
    }

    h2 {
        margin-bottom: 20px;
        color: green;
    }

    p {
        font-size: 17px;
        font-weight: 600;
        color: #000;
    }
`

/* display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999; */