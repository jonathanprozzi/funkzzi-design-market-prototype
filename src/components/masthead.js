import React from "react"
import yarnBackground from "../images/yarn-bg-1.jpg"
import { css } from "@emotion/core"

const Masthead = () => {
  return (
    <section
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url(${yarnBackground});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        min-height: 50vh;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
