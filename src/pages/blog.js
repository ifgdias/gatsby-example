import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

function blog() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga
          quo, vitae quidem provident qui excepturi quod veniam dolorem magni,
          nobis maxime quibusdam adipisci fugiat consequatur cumque sunt harum
          nostrum!
        </p>
      </div>
    </Layout>
  )
}

export default blog
