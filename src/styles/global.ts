import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
      box-sizing: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 400 ${({ theme }) => theme.fonts.regular}, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
  }
input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.xiketic};
    background: ${({ theme }) => theme.color.background};
    border-radius: 4px;
    padding: 0 24px;
    color: #737373;
    text-align: center;
}

button {
    background: #202B3F ;
    border: 0;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.background};
    text-align: center;
    text-decoration: none;
}

a{
  text-decoration: none;
  color: #737373;
  font: 400 Inter;
}
.Toastify__toast {
  background: #f3f3f3;
  color: #171717;
  }
.Toastify__toast--error {
  background: #f3f3f3;
  color: #EC2E20;
}
.Toastify__toast--warning {
  background: #f3f3f3;
  color: #F2e237;
}
.Toastify__close-button {
    color: #171717;
}
.Toastify__progress-bar {
    background: #547b98;
  }
`;
