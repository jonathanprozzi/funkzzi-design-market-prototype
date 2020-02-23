import React from "react"
import { css } from "@emotion/core"

const ContactForm = () => (
  <div
    css={css`
      max-width: 960px;
      margin: 0 auto;
    `}
  >
    <form
      name="funkzziInterestForm"
      method="post"
      action="/thank-you"
      data-netlify="true"
      netlify-honeypot="bot-field"
      css={css`
        /* max-width: 600px; */
        /* margin: 2rem auto; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #ffffff;
        border-radius: 16px;
        /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
        padding: 4rem;
        label {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        input,
        textarea {
          font-size: 1.5rem;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 2rem;
        }
        input::placeholder,
        textarea::placeholder {
          font-size: 1.5rem;
          color: #777;
        }
      `}
    >
      <h2
        css={css`
          font-size: 2.5rem;
          text-align: center;
        `}
      >
        Funkzzi Design Market Contact
      </h2>
      <input type="hidden" name="form-name" value="wavesInterestForm" />
      <input type="hidden" name="bot-field" />
      <label for="name">Enter your full name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="First Last"
        required
      />
      <label for="phone">Enter your phone number:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="555-555-5555"
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <label for="email">Enter your email address if you'd like:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="name@email.com"
        size="50"
      />
      <label for="whatsup">Tell us what's up!</label>
      <textarea
        name="whatsup"
        id="whatsup"
        rows="5"
        cols="33"
        placeholder="Tell us what's up!"
        required
      />
      <button
        css={css`
          color: #fff;
          background: #1de9b6;
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 2px;
          font-size: 2rem;
          text-align: center;
          letter-spacing: 0.5px;
          transition: all ease 0.3s;

          &:hover {
            cursor: pointer;
          }

          &:focus {
            outline: 0.5px dashed #000;
          }
        `}
        type="submit"
      >
        Send Us Your Note
      </button>
    </form>
  </div>
)

export default ContactForm
