import React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  background: papayawhip;
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
      {children}
    </Wrapper>
  )
}

export default Layout
