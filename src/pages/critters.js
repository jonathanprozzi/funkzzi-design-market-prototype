import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import PageBanner from "../components/page-banner"
import PageSection from "../components/page-section"
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
      <PageSection>
        <h3>Critters Gallery</h3>
        <p>
          Check out some images from our critter photoshoot! Critters are
          available for purchase at our Etsy page.
        </p>
        <p>
          Click this link to check them out:{" "}
          <a href="https://www.etsy.com/listing/778646111/crochet-mystery-critters">
            Crotchet Mystery Critters
          </a>
        </p>
      </PageSection>
    </Layout>
  )
}

export default CrittersPage
