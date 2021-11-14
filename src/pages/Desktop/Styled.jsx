import styled from "styled-components";

export const DesktopStyled = styled.section`
  display: flex;
  padding: 4rem 10rem;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #8b97bd;
  background: -webkit-radial-gradient(bottom left, #8b97bd, #ec7c7b);
  background: -moz-radial-gradient(bottom left, #8b97bd, #ec7c7b);
  background: radial-gradient(to top right, #8b97bd, #ec7c7b);

  
  .content {
    display: none;
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
    
    ::-webkit-scrollbar {
        width: 10px
    }

    ::-webkit-scrollbar-thumb {
    background: var(--primary); 
    }
  }
`;
