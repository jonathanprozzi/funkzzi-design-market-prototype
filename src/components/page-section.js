import React from "react"
import { css } from "@emotion/core"

const PageSection = ({ children }) => {
  return (
    <section
      css={css`
        max-width: 960px;
        margin: 4rem auto;
        min-height: 50vh;
        p {
          margin: 0;
          padding: 0;
          line-height: 1.66rem;
        }
      `}
    >
      {children}
    </section>
  )
}

export default PageSection
