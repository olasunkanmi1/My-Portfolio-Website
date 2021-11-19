import styled from "styled-components";

export const PortfolioStyled = styled.section`
  display: flex;
  flex-direction: column;

  .wrapper {
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    grid-gap: 30px;
    place-items: center;
    margin: 2rem 0;

    :nth-child(odd) {
      grid-template-columns: 0.4fr 0.6fr;
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background: #fff;
      box-shadow: 0 0 10px 5px var(--primary);
      overflow: hidden;
      width: 100%;

      .thumbnail {
        width: 100%;
        height: 200px;
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
            transform: rotate(180deg);
          }

          .down {
            transition: 0.2s;
            transform: rotate(0deg);
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

            @media screen and (max-width: 955px) {
              display: flex;
            }
          }

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 15px;
            outline: 2px solid var(--primary);
            color: var(--primary);
            border-radius: 5px;
            color: var(--primary);
            font-weight: 600;
            transition: 0.5s ease-in-out;

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

    @media screen and (max-width: 955px) {
      display: flex;

      .card {

        .tools-visible {
          flex-wrap: wrap;

          div {
            font-size: 12px;
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
`;
