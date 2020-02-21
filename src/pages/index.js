import React from "react"
import Layout from "../components/layout"
import Masthead from "../components/masthead"
import AboutSection from "../components/aboutsection"
import YarnSection from "../components/yarnsection"
import PortfolioSection from "../components/portfoliosection"
import EventSection from "../components/eventsection"
import ContactForm from "../components/contactform"

export default () => (
  <Layout>
    <Masthead />
    <AboutSection />
    <YarnSection />
    <div style={{ backgroundColor: "papayawhip", minHeight: "40vh" }}></div>
    <PortfolioSection />
    <EventSection />
    <YarnSection />
    <ContactForm />
  </Layout>
)
