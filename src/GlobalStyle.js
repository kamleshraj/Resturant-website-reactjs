import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-size:1rem;
    line-height:1.5
}
a{
    text-decoration:none;
    font-size:1rem;
    color:${({theme})=>theme.colors.text}
}
.main-section{
    padding:60px 0;
}
`;