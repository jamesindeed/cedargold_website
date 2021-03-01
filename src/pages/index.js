import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Work from "../components/Work"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Work heading="Previous Work"/>
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
