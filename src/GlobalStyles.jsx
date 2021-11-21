import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"); */

    :root {
        --primary: #142251;
        --secondary: #F92524;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
    }

    html, body {
        width: 100vw;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    @media screen and (orientation: portrait) {
        html {
            transform: rotate(-90deg);
            transform-origin: left top;
            width: 100vh;
            overflow-x: hidden;
            position: absolute;
            top: 100%;
            left: 0;
        }
    }
`;

export default GlobalStyles;
