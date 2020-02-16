import React from "react"
import { css } from "@emotion/core"

const AboutSection = () => (
  <section
    css={css`
      position: relative;
      margin: 0 auto;
      height: 100vh;
      background: #fafafa;
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <h2
        css={css`
          color: #000;
          font-size: 3rem;
        `}
      >
        About Us
      </h2>
    </div>
  </section>
)

export default AboutSection
