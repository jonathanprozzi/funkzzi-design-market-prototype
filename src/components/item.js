import React from "react"
import ItemCard from "../components/itemcard"

// split this out so any data passing occurs in this component and is passed to the layout component
const Item = ({ image, title, description }) => {
  return <ItemCard image={image} title={title} description={description} />
}

export default Item
