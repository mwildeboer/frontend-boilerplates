import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga","kern";
  }
  
  body {
    scroll-behavior: smooth;
  }
  
  #__next {
    height: 100%;
  }
`;