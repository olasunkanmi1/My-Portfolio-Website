import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #142251;
        --secondary: #F92524;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        transition: all;
        -webkit-transition: all;
        -moz-transition: all;
    }

    html, body {
        width: 100vw;
        overflow-x: hidden;
        transition: all;
        -webkit-transition: all;
        -moz-transition: all;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;

export default GlobalStyles;
