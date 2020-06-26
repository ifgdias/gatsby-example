import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"

const Products = ({ data }) => {
  const {
    allContentfulProduct: { products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          console.log(product)
          return (
            <article key={product.id}>
              <h1>{product.title}</h1>
              <Image fluid={product.image.fluid} alt={product.title}/>
              <h3>{product.title} <span>${product.price}</span></h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      products: nodes {
        id
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        price
        slug
      }
    }
  }
`

export default Products
