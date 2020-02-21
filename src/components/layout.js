import React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "../components/header"
import Footer from "../components/footer"

const Wrapper = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global
        css={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
