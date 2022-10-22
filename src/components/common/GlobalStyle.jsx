import styled, { createGlobalStyle } from "styled-components";

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

export const IMAGE = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: ${({ width, height }) => `${width}/${height}`};
  pointer-events: none;
`;

export const TEXT = styled.p`
  width: 70%;
  position: absolute;
  text-align: center;
  word-break: keep-all;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default GlobalStyle;
