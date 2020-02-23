import React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        css={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
            html {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              touch-action: manipulation;
            }
          }
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoosthing: grayscale;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
