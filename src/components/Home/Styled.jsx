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

  p {
    font-size: 20px;
    font-weight: 500;
  }

  .animation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 300px);

    .line {
      width: 100%;
      max-width: 8.4rem;
      height: 0.25rem;
      background-color: var(--secondary);
      position: relative;
      opacity: 0;
      -webkit-animation: grow 7s forwards;
      -moz-animation: grow 7s forwards;
      animation: grow 7s forwards;
      /* animation-delay: 0.5s; */
      transition: 3s ease-in-out;
    }

    .line-right::before, .line-right::after,
    .line-left::before, .line-left::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: 0.5rem solid transparent;
      opacity: 1;
      animation: grow 0.5s forwards;
    }

    .line-right::before {
      border-right-color: var(--secondary);
      right: 0;
    }

    .line-left::before {
      border-left-color: var(--secondary);
      left: 0;
    }
    
    .line-right::after {
      border-left-color: var(--secondary);
      right: -10px;
    }

    .line-left::after {
      border-right-color: var(--secondary);
      left: -10px;
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
      width: 150%;
      height: 150%;
      transform: rotate(-45deg);
    }
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
