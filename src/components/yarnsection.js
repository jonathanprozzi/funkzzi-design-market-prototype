import React from "react"
import yarnBackground from "../images/yarn-bg-1.jpg"
import { css } from "@emotion/core"

const YarnSection = ({ children }) => (
  <section
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(${yarnBackground});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left center;
      min-height: 50vh;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    `}
  >
    {children}
  </section>
)

export default YarnSection
