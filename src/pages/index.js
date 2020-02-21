import React from "react"
import Layout from "../components/layout"
import Masthead from "../components/masthead"
import AboutSection from "../components/aboutsection"
import YarnSection from "../components/yarnsection"
import PortfolioSection from "../components/portfoliosection"

export default () => (
  <Layout>
    <Masthead></Masthead>
    <AboutSection></AboutSection>
    <YarnSection></YarnSection>
    <div style={{ backgroundColor: "papayawhip", minHeight: "40vh" }}></div>
    <PortfolioSection></PortfolioSection>
  </Layout>
)
