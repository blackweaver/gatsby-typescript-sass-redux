import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

//GraphQL
import { graphql } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const About = ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
  </Layout>
)

export default About
