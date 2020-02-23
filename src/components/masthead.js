import React from "react"
import YarnSection from "./yarn-section"
import { css } from "@emotion/core"

const Masthead = () => {
  return (
    <YarnSection minHeight="60vh">
      >
      <div
        css={css`
          text-align: center;
        `}
      >
        <h2
          css={css`
            color: white;
            font-size: 4rem;
            text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
          `}
        >
          Funkzzi Design Market
        </h2>
        <p
          css={css`
            color: white;
            font-size: 2rem;
            text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
          `}
        >
          Designs crafted with{" "}
          <span
            css={css`
              color: #f06192;
            `}
          >
            care
          </span>{" "}
          in Baltimore
        </p>
      </div>
    </YarnSection>
  )
}

export default Masthead
