import styled from "styled-components";

export const PortfolioStyled = styled.section`
  display: flex;
  flex-direction: column;
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

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    place-items: center;
    margin: 2rem 0;
    z-index: 1;

    :nth-child(odd) {
      .card {
        order: 2;
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background: #fff;
      box-shadow: 0 3px 8px var(--primary);
      overflow: hidden;
      width: 100%;
      border-radius: 10px;
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
        border-radius: 10px;

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
            border-radius: 10px;

            div {
              border-radius: 5px;
            }

            @media screen and (max-width: 570px) {
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

    .tools {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      
      div {
        font-size: 14px;
        margin: 0 10px 10px 0;
        color: #fff;
        padding: 10px;
        border-radius: 5px;

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

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;

      :nth-child(odd) {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      grid-template-columns: 0.6fr 0.4fr;

      :nth-child(odd) {
        grid-template-columns: 0.4fr 0.6fr;
      }
    }

    @media screen and (max-width: 570px) {
      display: block;

      .card {

        .tools-visible {
          flex-wrap: wrap;
          justify-content: space-evenly;

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
    top: 289px;
    left: -37px;

    @media screen and (max-width: 640px) {
      left: -17px;
    }
  }

  .second {
    bottom: 503px;
    right: -32px;

    @media screen and (max-width: 640px) {
      right: -17px;
    }
  }
`;
