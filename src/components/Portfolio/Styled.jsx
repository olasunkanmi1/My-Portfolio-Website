import styled from "styled-components";

export const PortfolioStyled = styled.section`
  display: flex;
  flex-direction: column;

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

  .wrapper {
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    grid-gap: 30px;
    place-items: center;
    margin: 2rem 0;
    z-index: 1;

    :nth-child(odd) {
      grid-template-columns: 0.4fr 0.6fr;
    }

    .card {
      display: flex;
      flex-direction: column;
      grid-row: 1/2;
      padding: 10px;
      background: #fff;
      box-shadow: 0 0 10px 5px var(--primary);
      overflow: hidden;
      width: 100%;
      transition: .4s;
      -webkit-transition: .4s;
      -moz-transition: .4s;

      :hover {
        transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);

      }

      .thumbnail {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        background: rgb(20, 34, 81, 0.9);
        overflow: hidden;

        img {
          width: 80%;
          height: 100%;
        }
      }

      .about {
        display: flex;
        flex-direction: column;

        .name {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          text-transform: capitalize;
          cursor: pointer;

          .up {
            transition: 0.2s;
            -webkit-transition: .2s;
            -moz-transition: .2s;
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
          }

          .down {
            transition: 0.2s;
            -webkit-transition: 0.2s;
            -moz-transition: 0.2s;
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
          }
        }

        .description {
          display: flex;
          flex-direction: column;
          p {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 10px;
          }

          .tools-visible {
            display: none;

            @media screen and (max-width: 768px) {
              display: flex;
            }
          }

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 15px;
            outline: 2px solid var(--primary);
            border-radius: 5px;
            color: var(--primary);
            font-weight: 600;
            transition: 0.5s ease-in-out;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            cursor: pointer;

            svg {
              width: 20px;
              height: 20px;
              margin-left: 10px;
            }

            :hover {
              background: var(--primary);
              outline: none;
              color: #fff;
            }
          }
        }
      }
    }

    /* :nth-child(5) {
      .card {

          img {
          width: 400px;
          height: 200px;
        }
      }
    } */

    .tools {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      grid-row: 1/2;

      div {
        font-size: 14px;
        margin: 0 10px 10px 0;
        color: #fff;
        padding: 10px;

        :nth-child(odd) {
          background: var(--secondary);
        }

        :nth-child(even) {
          background: var(--primary);
        }
      }
    }

    @media screen and (max-width: 1100px) {
      grid-gap: 15px;
      grid-template-columns: 0.7fr 0.3fr;

      :nth-child(odd) {
        grid-template-columns: 0.3fr 0.7fr;
      }

      .tools div {
        font-size: 12px;
        padding: 5px;
        /* margin: 0 0 10px 0; */
      }
    }

    @media screen and (max-width: 768px) {
      display: flex;

      .card {

        .tools-visible {
          flex-wrap: wrap;

          div {
            font-size: 14px;
            margin: 0 10px 10px 0;
            color: #fff;
            padding: 7px;

            :nth-child(odd) {
              background: var(--secondary);
            }

            :nth-child(even) {
              background: var(--primary);
            }
          }
        }
      }

      .tools {
        display: none;
      }
    }
  }

  .first, .second {
    display: none;

    @media screen and (max-width: 1024px) {
      display: flex;
      position: absolute;
      height: 200px;
      width: 200px;
      opacity: .7;
      z-index: 0;
    }
  }

  .first {
    top: 350px;
    left: 0;

    @media screen and (max-width: 450px) {
      left: -32px;
    }
  }

  .second {
    bottom: 0;
    right: 0;

    @media screen and (max-width: 450px) {
      right: -32px;
    }
  }

  @media screen and (max-width: 1024px) {
    background: #fff;
    z-index: 1;
    padding: 2rem 1rem;
    height: auto;
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
