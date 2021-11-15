import styled from "styled-components";

export const HomeStyled = styled.section`
  /* margin-top: 85px; */
  h1 {
    font-size: 40px;
    line-height: 50px;
  }

  h2 {
      display: flex;
      flex-wrap: nowrap;
    font-size: 30px;
    height: 50px;
    color: var(--secondary);
    width: fit-content;
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
  }

  .img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
