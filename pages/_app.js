import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../components/StylesPatterns'
import AppCtx from '../components/contexts/ctxGlobal';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  /* Opcional: faz com que os textos renderizem mais rápido, bom em caso de bastante texto!
  text-rendering: optimizeSpeed; */
  padding: 0;
  line-height: 1.6;
  overflow-x: hidden;
}


ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  -webkit-text-decoration-skip: ink;
          text-decoration-skip-ink: auto;
}

img {
  ${'' /* max-width: 100%; */}
  display: block;
}

${'' /* input,
button,
textarea,
select {
  font: inherit;
} */}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

export default function App({ Component, pageProps }) {

  const [ isOpenMenu, setIsOpenMenu ] = useState(false)

  return (
    <>
      <GlobalStyle />
      <AppCtx.Provider value={{
          isOpenMenu, setIsOpenMenu
        }} >
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </AppCtx.Provider>
    </>
  )
}