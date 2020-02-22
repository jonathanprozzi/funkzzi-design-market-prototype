import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import BioCard from "./bio-card"

const AboutSection = () => {
  const { tracyImage, jonImage } = useStaticQuery(
    graphql`
      query {
        tracyImage: file(relativePath: { eq: "bios/tracy-profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jonImage: file(relativePath: { eq: "bios/jonathan-profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <section
      css={css`
        margin: 2rem auto;
        max-width: 900px;
        min-height: 100vh;

        @media only screen and (max-width: 1000px) {
          margin: 2rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <h2
          css={css`
            color: #000;
            font-size: 3rem;
          `}
        >
          About Us
        </h2>
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 2rem;
            grid-row-gap: 2rem;
            margin-top: 2rem;

            @media only screen and (max-width: 1000px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          <BioCard
            image={tracyImage.childImageSharp.fluid}
            name="Tracy Funk"
            bio="By day, I am a Human Resources Specialist. However, my true passion is crafting! I'm always searching for inspiration and love discovering new mediums and developing new skills."
          ></BioCard>
          <BioCard
            image={jonImage.childImageSharp.fluid}
            name="Jonathan Prozzi"
            bio="I'm an educator, technologist, musician, and design enthuasist. I'm passionate about discovering new mediums for expression, particularly at the intersection of art and technology."
          ></BioCard>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
