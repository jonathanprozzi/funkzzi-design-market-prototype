import React from "react"
import { css } from "@emotion/core"
import Item from "../components/item"
import itemOne from "../images/octopus-1.jpg"

const ItemGallery = () => (
  <div
    css={css`
      display: grid;
      /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      margin: 0 auto;

      @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    `}
  >
    <Item
      image={itemOne}
      title="Mystery Critters"
      description="Crocheted critters inside a mysterious egg!"
    ></Item>
    <Item
      image={itemOne}
      title="Jewelry"
      description="Various textile and metal jewelry!"
    ></Item>
    <Item
      image={itemOne}
      title="Plushies"
      description="Plushies and lovies!"
    ></Item>
    <Item
      image={itemOne}
      title="Decor"
      description="Flowers, dreamcatchers, coasters, and other items!"
    ></Item>
    <Item
      image={itemOne}
      title="Apparel"
      description="Hats, gloves, scrunchies, and more!"
    ></Item>
    <Item
      image={itemOne}
      title="Custom Designs"
      description="Custom items made to order by request!"
    ></Item>
  </div>
)

export default ItemGallery
