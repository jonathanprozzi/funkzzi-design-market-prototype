import React from "react"
import { css } from "@emotion/core"
import SiteNav from "../components/sitenav"
import { IconContext } from "react-icons"
import { MdFavorite, MdLocalCafe } from "react-icons/md"
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
    <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <MdFavorite />
        <h1
          css={css`
            font-size: 3rem;
            margin: 0;
            padding: 0 1rem;
          `}
        >
          Funkzzi
        </h1>
        <MdLocalCafe />
      </div>
    </IconContext.Provider>
    <SiteNav />
  </div>
)

export default Header
