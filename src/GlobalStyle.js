import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
a{
    text-decoration:none;
    font-size:1rem;
    color:${({theme})=>theme.colors.text}
}
.btn-theme{
    background:#fff;
    padding:15px;
    border-radius:6px;
}
`;