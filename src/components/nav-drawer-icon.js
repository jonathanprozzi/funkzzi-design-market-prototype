import React, { useState, useContext } from "react"
import { IconContext } from "react-icons"
import { MdMenu } from "react-icons/md"

const NavDrawerIcon = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerMenuContext = useContext(drawerOpen)
  return (
    <div onClick={() => setDrawerOpen(!drawerOpen)}>
      <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
        <MdMenu></MdMenu>
      </IconContext.Provider>
    </div>
  )
}

export default NavDrawerIcon
