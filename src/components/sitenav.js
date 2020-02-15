import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const SiteLink = styled(Link)`
  color: papayawhip;
  text-decoration: none;
  &:hover {
    color: #fff;
    transition: 0.5s ease-in-out;
  }
`

const SiteNav = () => (
  <nav
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      ul {
      }
      li {
        list-style: none;
      }
    `}
  >
    <ul>
      <li>
        <SiteLink>Portfolio</SiteLink>
      </li>
      <li>
        <SiteLink>Event</SiteLink>
      </li>
      <li>
        <SiteLink>About</SiteLink>
      </li>
      <li>
        <SiteLink>Contact</SiteLink>
      </li>
    </ul>
  </nav>
)

export default SiteNav
