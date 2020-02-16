import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const BioImage = styled(Img)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BioCard = ({ image, name, bio }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 2px 2px 0 0;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
        0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
      background: #ffffff;
    `}
  >
    <BioImage fluid={image}></BioImage>
    <div>
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  </div>
)

export default BioCard
