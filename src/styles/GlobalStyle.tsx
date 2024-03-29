import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-family: "Noto Sans KR", sans-serif;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}
    />
  );
};

export default GlobalStyle;
