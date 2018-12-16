import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Milo;
    font-weight: 300;
    src:
      url('./assets/fonts/MiloOT-Light.woff') format('woff')
      url('./assets/fonts/MiloOT-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: Milo;
    font-weight: 400;
    src:
      url('./assets/fonts/MiloOT-Medi.woff') format('woff')
      url('./assets/fonts/MiloOT-Medi.woff2') format('woff2');
  }
  @font-face {
    font-family: Milo;
    font-weight: 500;
    src:
      url('./assets/fonts/MiloOT.woff') format('woff')
      url('./assets/fonts/MiloOT.woff2') format('woff2');
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-family: Milo, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    color: ${props => props.theme.colors.dark3};
    font-weight: 400;
    // Allow the numbers to be aligned with the text
    // (milo font numbers do not aligned by default)
    font-variant-numeric: lining-nums;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
