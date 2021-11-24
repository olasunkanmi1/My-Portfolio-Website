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

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
      width: 200px;
      border-radius: 5px;
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
      }
    }
  }

  p {
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
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

  .dots {
    display: none;

    @media screen and (max-width: 1024px) {
      display: flex;
      /* height: 350px; */
      position: absolute;
      top: 340px;
      left: 0;
      opacity: .7;
      z-index: 0;
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
      height: 50px;
      width: 105%;
      background: #f2f2f2;
    }

  }
`;
