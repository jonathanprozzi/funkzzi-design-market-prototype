import React from "react"
import Layout from "../components/layout"
import Masthead from "../components/masthead"
import AboutSection from "../components/about-section"
import YarnSection from "../components/yarn-section"
import PortfolioSection from "../components/portfolio-section"
import EventSection from "../components/event-section"

const Index = () => (
  <Layout>
    <Masthead />
    <AboutSection />
    <YarnSection minHeight="50vh" />
    <PortfolioSection />
    <EventSection />
    <YarnSection />
  </Layout>
)

export default Index
