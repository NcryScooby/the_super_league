import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background-color: #cd3dc8;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        cursor: pointer;
        border: none;
        outline: none;
        background-color: #ffffff;
        color: #363636;
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 1rem;
    }
`;

export default GlobalStyles;
