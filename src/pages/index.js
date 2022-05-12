import * as React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="meyongdong's dishes"
        src="../images/top.png"
      />
    </Layout>
  )
}

export default IndexPage