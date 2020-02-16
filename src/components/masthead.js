import React from "react"
import YarnSection from "../components/yarnsection"
import { css } from "@emotion/core"

const Masthead = () => {
  return (
    <YarnSection>
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
          `}
        >
          Funkzzi Design Market
        </h2>
        <p
          css={css`
            color: white;
            font-size: 2rem;
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
