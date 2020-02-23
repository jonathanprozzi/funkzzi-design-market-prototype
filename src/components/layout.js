import React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
            html {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              touch-action: manipulation;
            }
          }
          body {
            margin: 0;
            padding: 0;
            max-width: 100%;
            overflow-x: hidden;
            width: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoosthing: grayscale;
            font-size: "16px";
            line-height: 1.666;
            font-family: "Avenir", "Helvetica Neue", "Segoe UI", "Helvetica",
              "Arial", "sans-serif";
            /* global variables */
            --accent-color: #1ce9b6;
          }
          h1 {
          }
          h2 {
            font-size: 4rem;
            letter-spacing: -0.5;
            font-weight: lighter;
            @media only screen and (max-width: 1000px) {
              font-size: 3rem;
            }
          }
          h3 {
            font-size: 3rem;
            letter-spacing: 0;
            font-weight: normal;
          }
          h4 {
            font-size: 2rem;
            letter-spacing: 0.25;
            font-weight: normal;
          }
          h5 {
            font-size: 1.5rem;
            letter-spacing: 0.15;
            font-weight: normal;
          }
          h6 {
            font-size: 1.25rem;
            letter-spacing: 0;
            font-weight: medium;
          }
          p {
            font-size: 1rem;
            letter-spacing: 0.5;
            font-weight: normal;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
