import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import SiteNav from "./site-nav"
import NavdDrawer from "./nav-drawer"
import { IconContext } from "react-icons"
import { MdFavorite, MdLocalCafe } from "react-icons/md"
import NavDrawer from "./nav-drawer"

const Header = () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      padding: 1rem 0;
      background: var(--accent-color);
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
        <Link
          to="/"
          css={css`
            text-decoration: none;
            color: #fff;
            &:hover {
              color: #000;
              transition: "0.5s ease-in-out";
            }
          `}
        >
          <h1
            css={css`
              font-size: 3rem;
              margin: 0;
              padding: 0 1rem;
            `}
          >
            Funkzzi
          </h1>
        </Link>
        <MdLocalCafe />
      </div>
      <NavDrawer />
      <SiteNav />
    </IconContext.Provider>
  </div>
)

export default Header
