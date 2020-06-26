import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({data}) => {

  const {site: {
    info: {
      author
    }
  }} = data

  return (
    <div>
      <Layout>
        <p>Hello from example page</p>
        <Header />

        <p>author: {author}</p>
      </Layout>
    </div>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        author
        title
        description
        data
      }
    }
  }
`
export default examples
