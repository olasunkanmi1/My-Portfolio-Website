import styled from "styled-components";

export const AppStyled = styled.body`
  display: flex;
  flex-direction: column;

  .view {
    display: flex;
    padding: 4rem 10rem;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-image: url("https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 1200px) {
      padding: 4rem 8rem;
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      overflow-y: scroll;
      background-image: none;
      /* margin-top: 4rem; */
      height: auto;
    }

    @media screen and (max-width: 1000px) {
      padding: 4rem 7rem;
    }

    @media screen and (max-width: 920px) {
      padding: 4rem 6rem;
    }

    @media screen and (max-width: 768px) {
      padding: 1rem 5rem;
    }

    @media screen and (max-width: 600px) {
      padding: 1rem 4rem;
    }

    @media screen and (max-width: 500px) {
      padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
      padding: 1rem 2rem;
    }

    :before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #8b97bd;
      background: -webkit-radial-gradient(bottom left, #8b97bd, #ec7c7b);
      background: -moz-radial-gradient(bottom left, #8b97bd, #ec7c7b);
      background: radial-gradient(to top right, #8b97bd, #ec7c7b);
      opacity: 0.5;
      z-index: 0;

      @media screen and (max-width: 1024px) {
        background: #eee;
      }
    }

    .content {
      display: none;

      @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
      }
    }

    .active-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100vw;
      padding: 2rem 3rem;
      background: #fff;
      overflow-x: hidden;
      overflow-y: scroll;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4.5px);
      -webkit-backdrop-filter: blur(4.5px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 5px;
      }

      @media screen and (max-width: 840px) {
        padding: 2rem 1.5rem;
      }
    }
  }
`;
