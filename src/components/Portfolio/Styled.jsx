import styled from "styled-components";

export const PortfolioStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;
  background: #eee;

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

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 15px;
            background: var(--primary);
            border-radius: 5px;
            color: #fff;

            svg {
              width: 20px;
              height: 20px;
              margin-left: 10px;
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
  }
`;
