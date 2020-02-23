import React from "react"
import { css } from "@emotion/core"

const PageBanner = ({ image, title, subtitle, position }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url(${image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: ${(position && position) || "50% 50%"};
        min-height: 50vh;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <h2
          css={css`
            color: #fff;
            font-size: 4rem;
            text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
            margin: 0;
            padding: 0;
          `}
        >
          {title}
        </h2>
        <p
          css={css`
            color: white;
            font-size: 2rem;
            text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
            opacity: 0.8;
            margin: 0;
            padding: 0;
          `}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default PageBanner
