import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import PageBanner from "../components/page-banner"
import { css } from "@emotion/core"
import crittersBackgroundImage from "../images/items/octopus-1.jpg"

const CrittersPage = () => {
  return (
    <Layout>
      <PageBanner
        title="Mystery Critters"
        subtitle="Hand-made crotcheted critters!"
        image={crittersBackgroundImage}
        position="0% 20%"
      ></PageBanner>
      <section
        css={css`
          min-height: 80vh;
        `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa
        aspernatur beatae, temporibus consectetur omnis voluptas voluptatibus
        quisquam, maxime maiores optio veniam non commodi quia quos recusandae,
        adipisci consequuntur quod!
      </section>
    </Layout>
  )
}

export default CrittersPage
