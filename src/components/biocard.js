import React from "react"
import { css } from "@emotion/core"

const BioCard = ({ image, name, bio }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 2px 2px 0 0;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
        0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
      background-image: url("../images/jonathan-profile.jpg");
      background: #ffffff;
    `}
  >
    <div
      css={css`
        height: 100px;
        background-color: pink;
      `}
    ></div>
    <div>
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  </div>
)

export default BioCard
