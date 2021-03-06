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
      align-items: center;
      width: 40%;
      position: relative;

      .display {
        display: none;
        position: absolute;

        @media screen and (max-width: 1024px) {
          display: flex;
        }
      }

      .left {
        top: 0;
        left: -50px;

        .square {
          div {
            -webkit-animation: flip-left 8s infinite;
            -moz-animation: flip-left 8s infinite;
            animation: flip-left 8s linear infinite;
            transform-origin: right bottom;
          }

          div:nth-child(2) {
            animation-delay: 3.5s;
            opacity: 0.7;
          }
        }
      }

      .right {
        bottom: 0;
        right: -50px;

        .square {
          div {
            -webkit-animation: flip-right 8s infinite;
            -moz-animation: flip-right 8s infinite;
            animation: flip-right 8s linear infinite;
            transform-origin: right bottom;
          }

          div:nth-child(2) {
            animation-delay: 3.5s;
            opacity: 0.7;
          }
        }
      }

      @keyframes flip-left {
        0% {
          transform: rotateX(0) rotateY(0);
        }
        25% {
          transform: rotateX(180deg) rotateY(0);
        }
        50% {
          transform: rotateX(180deg) rotateY(180deg);
        }
        75% {
          transform: rotateX(0) rotateY(180deg);
        }
        100% {
          transform: rotateX(0) rotateY(0);
        }
      }

      @-webkit-keyframes flip-left {
        0% {
          -webkit-transform: rotateX(0) rotateY(0);
        }
        25% {
          -webkit-transform: rotateX(180deg) rotateY(0);
        }
        50% {
          -webkit-transform: rotateX(180deg) rotateY(180deg);
        }
        75% {
          -webkit-transform: rotateX(0) rotateY(180deg);
        }
        100% {
          -webkit-transform: rotateX(0) rotateY(0);
        }
      }

      @-moz-keyframes flip-left {
        0% {
          -moz-transform: rotateX(0) rotateY(0);
        }
        25% {
          -moz-transform: rotateX(180deg) rotateY(0);
        }
        50% {
          -moz-transform: rotateX(180deg) rotateY(180deg);
        }
        75% {
          -moz-transform: rotateX(0) rotateY(180deg);
        }
        100% {
          -moz-transform: rotateX(0) rotateY(0);
        }
      }

      @keyframes flip-right {
        0% {
          transform: rotateX(0) rotateY(0);
        }
        25% {
          transform: rotateX(0) rotateY(180deg);
        }
        50% {
          transform: rotateX(180deg) rotateY(180deg);
        }
        75% {
          transform: rotateX(180deg) rotateY(0);
        }
        100% {
          transform: rotateX(0) rotateY(0);
        }
      }

      @-webkit-keyframes flip-right {
        0% {
          -webkit-transform: rotateX(0) rotateY(0);
        }
        25% {
          -webkit-transform: rotateX(0) rotateY(180deg);
        }
        50% {
          -webkit-transform: rotateX(180deg) rotateY(180deg);
        }
        75% {
          -webkit-transform: rotateX(180deg) rotateY(0);
        }
        100% {
          -webkit-transform: rotateX(0) rotateY(0);
        }
      }

      @-moz-keyframes flip-right {
        0% {
          -moz-transform: rotateX(0) rotateY(0);
        }
        25% {
          -moz-transform: rotateX(0) rotateY(180deg);
        }
        50% {
          -moz-transform: rotateX(180deg) rotateY(180deg);
        }
        75% {
          -moz-transform: rotateX(180deg) rotateY(0);
        }
        100% {
          -moz-transform: rotateX(0) rotateY(0);
        }
      }

      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        width: 200px;
        height: 200px;
        border-radius: 0 50% 50% 50%;
        transform: rotate(45deg);
        overflow: hidden;
        margin: 4rem 0 0;
        box-shadow: var(--primary) 0px 3px 8px;

        img {
          width: 130%;
          height: 130%;
          transform: rotate(-45deg);
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

  @media screen and (max-width: 1024px) {
    background: #fff;
    z-index: 1;
    padding: 1rem;
    padding-top: 95px;
    position: relative;

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      height: 70px;
      width: 105%;
      background: #f2f2f2;
    }

    .display {
      .square {
        width: 100px;
        height: 100px;
        position: relative;
        perspective: 2000px;

        div {
          position: absolute;
          top: 0;
          height: 50px;
          width: 50px;
          background: #f17e7e;
        }
      }
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
