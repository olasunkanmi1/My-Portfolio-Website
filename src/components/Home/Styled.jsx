import styled from "styled-components";

export const HomeStyled = styled.section`
  /* margin-top: 85px; */
  h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .typing {
    display: flex;
    font-size: 30px;
    font-weight: 600;
    height: 50px;
    color: var(--secondary);
  }

  .ityped-cursor {
    font-size: 2.2rem;
    opacity: 1;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
  }

  @keyframes blink {
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes blink {
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes blink {
    100% {
      opacity: 0;
    }
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 60%;

      p {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 25px;
      }

      .animation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-right: 20px;

        .line {
          max-width: calc(calc(100% - 180px) / 2);
          height: 3px;
          background-color: var(--secondary);
          position: relative;
          -webkit-animation: grow 8s forwards;
          -moz-animation: grow 8s forwards;
          animation: grow 8s forwards;
        }

        @keyframes grow {
          0% {
            width: 0;
          }
          100% {
            opacity: 1;
            width: 100%;
          }
        }

        @-webkit-keyframes grow {
          0% {
            width: 0;
          }
          100% {
            opacity: 1;
            width: 100%;
          }
        }

        @-moz-keyframes grow {
          0% {
            width: 0;
          }
          100% {
            opacity: 1;
            width: 100%;
          }
        }
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        background: var(--primary);
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        width: 150px;
        border-radius: 3px;
        margin: 0 15px;
        transition: 0.3s ease-in-out;

        :hover {
          transform: scale(0.98);
        }
      }
    }

    .image-container {
      display: flex;
      justify-content: center;
      width: 40%;

      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        width: 200px;
        height: 200px;
        min-width: 30%;
        border-radius: 0 50% 50% 50%;
        transform: rotate(45deg);
        overflow: hidden;
        margin: 4rem 0 0;
        box-shadow: var(--primary) 0px 3px 8px;

        img {
          width: 150%;
          height: 150%;
          transform: rotate(-45deg);
        }
      }
    }
  }

  //mediaqueries
  @media screen and (max-width: 1050px) {
    h1 {
      font-size: 30px;
    }

    .typing {
      font-size: 24px;
    }

    .wrap {
      flex-direction: column;

      .info {
        width: 100%;
        order: 2;
        margin-top: 20px;
      }

      .image-container {
        width: 100%;
      }
    }
  }
`;
