import React from "react"
import { Link } from "gatsby"
import image from "../images/gatsby-astronaut.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

//GraphQL
import { graphql } from "gatsby"

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title_about
          description_about
        }
      }
    }
  }
}
`

const About = ({ data }) => (
  <Layout>
    <SEO title="About us" description="Description about us" />
      { data.allMarkdownRemark.edges.map(({node}) => (
        <>
          <h1>{ node.frontmatter.title_about }</h1>
          <p>{ node.frontmatter.description_about }</p>
        </>
      ))}
      <img src={ image } style={{ maxWidth: '400px' }} alt=""/>
  </Layout>
)

export default About
