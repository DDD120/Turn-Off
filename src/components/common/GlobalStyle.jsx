import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NanumGothicBold";
    src: local("NanumGothicBold"),
      url("fonts/NanumGothicBold.woff2") format("woff2"),
      url("fonts/NanumGothicBold.woff") format("woff");
    font-display: swap;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "NanumGothicBold", serif;
  }

  html,
  body,
  #___gatsby,
  #___gatsby > div,
  #___gatsby > div > div {
    height: 100%;
    background-color: #fff;
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  ul, li {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyle;
