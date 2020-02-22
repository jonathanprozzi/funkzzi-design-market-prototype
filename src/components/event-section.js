import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

const EventSection = () => {
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
          News & Events
        </h2>
      </div>
      <h3>Event 1</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
        cumque voluptate inventore ipsa nobis assumenda, doloremque at unde
        possimus placeat quas nam dolore a totam laudantium aliquid omnis!
        Itaque, aut! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consectetur aliquam tempore numquam dolores, quasi non ab molestias!
        Repudiandae, consequuntur, rem sint fugit ea unde, corrupti dolore
        labore modi distinctio nisi?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi
        itaque ad. Error in recusandae vero iste vitae sint ab officiis
        quibusdam natus eos quaerat nostrum minus, libero numquam cum.
      </p>
    </section>
  )
}

export default EventSection
