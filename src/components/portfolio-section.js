import React from "react"
import { css } from "@emotion/core"
import ItemGallery from "./item-gallery"

const PortfolioSection = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 900px;
        margin: 4rem auto;
      `}
    >
      <h2
        css={css`
          color: #000;
          font-size: 3rem;
        `}
      >
        Portfolio
      </h2>
      <p>
        Here is a sampling of some of our works. Each item is hand crafted from
        high quality components such as hand painted merino wool. Tracy creates
        the patterns for all of the crocheted animals, many of which are custom
        designs that were made to order.
      </p>
      <p>
        This is just a sampling of our designs. More will be added soon so be
        sure to check back! Click or tap each picture to see a larger version.
      </p>
      <ItemGallery />
    </section>
  )
}

export default PortfolioSection
