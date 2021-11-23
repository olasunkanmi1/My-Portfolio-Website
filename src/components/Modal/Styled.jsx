import styled from "styled-components"

export const ModalStyled = styled.div`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    .wrap {
        display: flex;
        flex-direction: column;
        padding: 15px;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        box-shadow: var(--primary) 0px 3px 8px;
        z-index: 99;

        .close {
            width: 30px;
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
        }

        img {
            width: 50px;
            height: 50px;
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
    }
`