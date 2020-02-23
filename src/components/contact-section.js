import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const ContactSection = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Want more information? Have questions?</p>
      <p>We'd love to hear from you!</p>
      <p>
        Check out our contact page:
        <Link to="/contact">Contact Us</Link>
      </p>
    </div>
  )
}

export default ContactSection
