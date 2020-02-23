import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Item from "./item"

// query for images in this component -> passed to each ItemCard

const ItemGallery = () => {
  const { critterImage, jewelryImage } = useStaticQuery(
    graphql`
      query {
        critterImage: file(relativePath: { eq: "items/octopus-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jewelryImage: file(relativePath: { eq: "items/earrings-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
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
        image={critterImage.childImageSharp.fluid}
        alt="Crotcheted octobus"
        title="Mystery Critters"
        description="Crocheted critters inside a mysterious egg!"
      ></Item>
      <Item
        image={jewelryImage.childImageSharp.fluid}
        title="Jewelry"
        description="Various textile and metal jewelry!"
      ></Item>
      <Item
        image={critterImage.childImageSharp.fluid}
        title="Plushies"
        description="Plushies and lovies!"
      ></Item>
      <Item
        image={jewelryImage.childImageSharp.fluid}
        title="Decor"
        description="Flowers, dreamcatchers, coasters, and other items!"
      ></Item>
      <Item
        image={critterImage.childImageSharp.fluid}
        title="Apparel"
        description="Hats, gloves, scrunchies, and more!"
      ></Item>
      <Item
        image={jewelryImage.childImageSharp.fluid}
        title="Custom Designs"
        description="Custom items made to order by request!"
      ></Item>
    </div>
  )
}

export default ItemGallery
