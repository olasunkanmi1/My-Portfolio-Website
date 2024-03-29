import styled from "styled-components";

export const AboutStyled = styled.section`
position: relative;

  h1 {
    font-size: 30px;
    position: relative;
    margin-bottom: 25px;

    &:before {
      content: '';
      position: absolute;
      bottom: -10px;
      height: 3px;
      background: var(--secondary);
      width: 70px;
    }
  }
  
  .wrap {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: space-evenly;
    z-index: 1;
    margin-top: 20px;

    @media screen and (max-width: 465px) {
      grid-template-columns: repeat(auto-fill, 170px);
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
      border-radius: 10px;
      box-shadow: var(--primary) 0px 3px 8px;
      background: #fff;      

      .svg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85px;
        height: 85px;
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
        font-size: 18px;
      }

      p {
        font-size: 16px;
        margin: 0;
        text-align: center;
      }
    }
  }

  p {
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    text-align: justify;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
      color: #fff;
      font-size: 16px;
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

    @media screen and (max-width: 370px) {
      flex-direction: column;

      .mail {
        margin: 0 0 15px 0;
      }
    }
  }

  .first, .second {
    display: none;

    @media screen and (max-width: 1024px) {
      display: flex;
      height: 200px;
      width: 200px;
      position: absolute;
      opacity: .7;
      z-index: 0;
    }
  }

  .first {
    top: 203px;
    left: -37px;
  }
  
  .second {
    top: 303px;
    right: -37px;
  }

  @media screen and (max-width: 717px) {
    .first {
      top: 243px;
    }
    
    .second {
      top: 503px;
    }
  }
  
  @media screen and (max-width: 640px) {
    .first {
      left: -17px;
    }
    
    .second {
      right: -17px;
    }
  }

  @media screen and (max-width: 402px) {
    .second {
      top: 1283px;
    }
  }
`;
