import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
// import { useSpring, animated, config } from 'react-spring';

const NavDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        padding: 4rem;
        max-height: 100vh;
        min-height: 50vh;
        max-width: 80vh;
        background: rgba(255, 255, 255, 0.9);
        z-index: 10;
      `}
    >
      <SlideNavContainer>
        <SiteNavList>
          <SiteNavEntry>
            <SiteNavLink color="var(--accent-color)" to="/portfolio">
              Portfolio
            </SiteNavLink>
          </SiteNavEntry>
          <SiteNavEntry>
            <SiteNavLink color="var(--accent-color)" to="/events">
              Events
            </SiteNavLink>
          </SiteNavEntry>
          <SiteNavEntry>
            <SiteNavLink color="var(--accent-color)" to="/about">
              About
            </SiteNavLink>
          </SiteNavEntry>
          <SiteNavEntry>
            <SiteNavLink color="var(--accent-color)" to="/contact">
              Contact
            </SiteNavLink>
          </SiteNavEntry>
        </SiteNavList>
      </SlideNavContainer>
    </div>
  )
}

export default NavDrawer

const SlideNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 0;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const SiteNavList = styled.ul`
  padding: 0;
  margin: 0;
`

const SiteNavEntry = styled.li`
  list-style-type: none;
  display: block;
  padding: 0.5rem;
  @media only screen and (max-width: 1000px) {
    padding-left: 0;
    padding-right: 2rem;
  }
`

const SiteNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 1rem;
  margin-bottom: 0;
  margin-left: 0;
  color: var(--accent-color);
  font-size: 1.5rem;
  font-weight: bolder;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #333;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`
