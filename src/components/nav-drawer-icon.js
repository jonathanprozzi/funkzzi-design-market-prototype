import React, { useState, useContext } from "react"
import { css } from "@emotion/core"
import { IconContext } from "react-icons"
import { MdMenu } from "react-icons/md"

const NavDrawerIcon = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
        <MdMenu></MdMenu>
      </IconContext.Provider>
    </div>
  )
}

export default NavDrawerIcon
