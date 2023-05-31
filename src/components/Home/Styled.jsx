import styled from "styled-components";

export const HomeStyled = styled.section`
  h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .typing {
    display: flex;
    font-size: 30px;
    font-weight: 600;
    color: var(--secondary);
    height: 35px;
  }

  .ityped-cursor {
    font-size: 2.2rem;
    opacity: 1;
    -webkit-animation: blink 1s infinite;
    -moz-animation: blink 1s infinite;
    animation: blink 1s infinite;
    color: var(--secondary);
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 50%;


      p {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 25px;
        text-align: center;
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
      align-items: center;
      width: 50%;
      position: relative;

      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0.5rem;
        width: 250px;
        height: 250px;
        border-radius: 0 50% 50% 50%;
        transform: rotate(45deg);
        overflow: hidden;
        margin: 4rem 0 0;
        box-shadow: var(--primary) 0px 3px 8px;

        @media screen and (max-width: 300px) {
          width: 200px;
          height: 200px;
        }

        img {
          width: 130%;
          height: 130%;
          transform: rotate(-45deg) translateY(-30px);
        }
      }
    }
  }

  //mediaqueries
  @media screen and (max-width: 1050px) {
    h1 {
      font-size: 30px;
      line-height: 35px;
    }

    .typing {
      font-size: 25px;
    }

    .wrap {
      flex-direction: column;

      .info {
        width: 100%;
        order: 2;
        margin-top: 20px;

        .animation {
          padding-right: 0;
        }
      }

      .image-container {
        width: 100%;
      }
    }
  }
  
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 28px;
      line-height: 35px;
    }
  }

  //animations
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
`;
