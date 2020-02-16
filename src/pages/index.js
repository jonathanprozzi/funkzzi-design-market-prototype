import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Masthead from "../components/masthead"
import AboutSection from "../components/aboutsection"
import YarnSection from "../components/yarnsection"

export default () => (
  <Layout>
    <Header></Header>
    <Masthead></Masthead>
    <AboutSection></AboutSection>
    <YarnSection>
      <h2>Testing</h2>
    </YarnSection>
  </Layout>
)
