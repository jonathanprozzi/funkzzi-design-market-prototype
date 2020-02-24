import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const SiteLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  &:hover {
    color: #000;
    transition: 0.5s ease-in-out;
  }
`

const SiteNav = () => (
  <nav
    css={css`
      margin: 0;
      padding: 0;
    `}
  >
    <ul
      css={css`
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;

        @media only screen and (max-width: 1000px) {
          display: none;
        }

        li {
          list-style: none;
          padding: 0 1rem;
          margin: 0;
        }
      `}
    >
      <li>
        <SiteLink>Portfolio</SiteLink>
      </li>
      <li>
        <SiteLink>Events</SiteLink>
      </li>
      <li>
        <SiteLink>About</SiteLink>
      </li>
      <li>
        <SiteLink to="/contact">Contact</SiteLink>
      </li>
    </ul>
  </nav>
)

export default SiteNav
