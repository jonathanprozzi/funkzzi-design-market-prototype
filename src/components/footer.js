import React from "react"
import { css } from "@emotion/core"
import { colors } from "../utils/colors"

const Footer = () => (
  <footer
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: ${colors.accentColor};
      color: #fff;
      min-height: 10vh;
    `}
  >
    <span>© {new Date().getFullYear()} Tracy Funk & Jonathan Prozzi</span>
  </footer>
)

export default Footer
