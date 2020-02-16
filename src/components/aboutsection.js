import React from "react"
import { css } from "@emotion/core"
import BioCard from "../components/biocard"

const AboutSection = () => (
  <section
    css={css`
      margin: 0 auto;
      max-width: 900px;
      min-height: 100vh;
      background: #fafafa;
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
          name="Tracy Funk"
          bio="By day, I am a Human Resources Specialist. However, my true passion is crafting! I'm always searching for inspiration and love discovering new mediums and developing new skills."
        ></BioCard>
        <BioCard
          name="Jonathan Prozzi"
          bio="I'm an educator, technologist, musician, and design enthuasist. I'm passionate about discovering new mediums for expression, particularly at the intersection of art and technology."
        ></BioCard>
      </div>
    </div>
  </section>
)

export default AboutSection
