import React from "react"
import { css } from "@emotion/core"

const Masthead = () => {
  return (
    <section
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        min-height: 50vh;
      `}
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
    </section>
  )
}

export default Masthead
