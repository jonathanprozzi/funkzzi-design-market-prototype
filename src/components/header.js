import React from "react"
import { css } from "@emotion/core"
import SiteNav from "../components/sitenav"

const Header = () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      background: #000;
      color: #fff;
    `}
  >
    <h1>Funkzzi</h1>
    <SiteNav />
  </div>
)

export default Header
