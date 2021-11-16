import styled from "styled-components";

export const AboutStyled = styled.section`
  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
      width: 200px;
      margin: 0 15px 15px 0;
      border-radius: 5px;
      box-shadow: var(--primary) 0px 3px 8px;

      .svg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        border-radius: 0 50% 50% 50%;
        transform: rotate(45deg);
        margin-top: 2rem;
        overflow: hidden;
        background: var(--primary);

        svg {
          width: 70%;
          height: 70%;
          transform: rotate(-45deg);
        }
      }

      h4 {
        margin: 15px 0;
      }

      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }

  p {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    justify-content: center;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
      color: #fff;
      font-size: 14px;
      border-radius: 3px;
      transition: 0.5s ease-in-out;

      :hover {
        transform: scale(0.98);
      }
    }

    .mail {
      margin-right: 15px;
      background: var(--secondary);
    }

    .cv {
      background: var(--primary);
    }
  }
`;
