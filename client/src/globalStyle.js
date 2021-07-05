import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    @font-face {
        font-family: Georgia, serif;
    }
    body {
        font-family: Georgia, serif;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default globalStyle;
