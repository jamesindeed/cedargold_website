import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Work from "../components/Work"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Work heading="Previous Work"/>
  </Layout>
)

export default IndexPage
