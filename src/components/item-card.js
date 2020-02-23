import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const ItemImage = styled(Img)`
  border-radius: 2px 2px 0 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`

const ItemCard = ({ image, alt, title, description }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px 8px 0 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
        background: #fff;
        max-width: 800px;
        max-height: 600px;
      `}
    >
      <ItemImage fluid={image} alt={alt}></ItemImage>
      <div
        css={css`
          padding: 2rem;
          text-align: center;
        `}
      >
        <h3
          css={css`
            font-size: 2rem;
          `}
        >
          {title}
        </h3>
        <p
          css={css`
            font-size: 1rem;
          `}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default ItemCard
