import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Work from "../components/Work"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Work heading="Previous Work"/>
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
