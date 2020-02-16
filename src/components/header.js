import React from "react"
import { css } from "@emotion/core"
import SiteNav from "../components/sitenav"
import { colors } from "../utils/colors"

const Header = () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2rem 0;
      background: ${colors.accentColor};
      color: #fff;
    `}
  >
    <h1
      css={css`
        font-size: 3rem;
        margin: 0;
        padding: 0;
      `}
    >
      Funkzzi
    </h1>
    <SiteNav />
  </div>
)

export default Header
