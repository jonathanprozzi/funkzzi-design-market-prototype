import React from "react"
import { css } from "@emotion/core"
import ItemGallery from "../components/itemgallery"

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
      <ItemGallery />
    </section>
  )
}

export default PortfolioSection
