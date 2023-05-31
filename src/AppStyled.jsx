import styled from "styled-components";
import bg from "./assets/background.png";

export const AppStyled = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4rem 10rem;

  @media screen and (max-width: 1200px) {
    padding: 4rem 8rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    background-image: none;
    height: auto;
    padding: 0;
  } 

  .view {
    width: 100%;
    height: 100%;
    max-width: 854px;
    margin: auto;
    max-height: 490px;
    margin-left: calc((100vw - 1004px) / 2);
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border-radius: 10px;
    gap: 4rem; 
    padding: 2rem 3rem;
    overflow: hidden;
    overflow-y: auto;

    @media screen and (max-width: 1345px) {
      margin-left: 170px;
      max-width: calc((100% - 20rem) + 150px);
    }

    @media screen and (max-width: 1024px) {
      padding: 0;
      margin: 0;
      padding: 115px 0 20px;
      /* height: fit-content; */
      max-width: 100%;
      background: none;
      box-shadow: none;
      gap: 40px; 
      max-height: none;
    background: #f2f2f2;
      overflow: hidden;
    }

    ::-webkit-scrollbar {
      width: 10px;

      @media screen and (max-width: 1024px) {
        width: 0;
      }
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 5px;
    }
    
    ::-moz-scrollbar {
      width: 10px;

      @media screen and (max-width: 1024px) {
        width: 0;
      }
    }

    ::-moz-scrollbar-thumb {
      background: var(--primary);
      border-radius: 5px;
    }

    .content {
      display: none;
      position: relative;

      .tag {
        position: absolute;
        top: -120px;
        height: 100%;
        background: transparent;
      }

      @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 10px;
        margin: 0 32px;
        padding: 20px 12px;
        background: #fff;
        z-index: 1;
      }

      @media screen and (max-width: 640px) {
        margin: 0 12px;
      } 
    }

    .active-content {
      display: flex;
      flex-direction: column;
    }
  }
`;
