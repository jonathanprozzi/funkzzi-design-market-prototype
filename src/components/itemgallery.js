import React from "react"
import { css } from "@emotion/core"
import ItemCard from "../components/itemcard"
import itemOne from "../images/octopus-1.jpg"

const ItemGallery = () => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      margin: 0 auto;

      @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    `}
  >
    <ItemCard
      image={itemOne}
      title="Mystery Critters"
      description="Crocheted critters inside a mysterious egg!"
    ></ItemCard>
    <ItemCard
      image={itemOne}
      title="Jewelry"
      description="Various textile and metal jewelry!"
    ></ItemCard>
    <ItemCard
      image={itemOne}
      title="Plushies"
      description="Plushies and lovies!"
    ></ItemCard>
    <ItemCard
      image={itemOne}
      title="Decor"
      description="Flowers, dreamcatchers, coasters, and other items!"
    ></ItemCard>
    <ItemCard
      image={itemOne}
      title="Apparel"
      description="Hats, gloves, scrunchies, and more!"
    ></ItemCard>
    <ItemCard
      image={itemOne}
      title="Custom Designs"
      description="Custom items made to order by request!"
    ></ItemCard>
  </div>
)

export default ItemGallery
