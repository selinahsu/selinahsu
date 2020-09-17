import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../components/layout.css"
import SEO from "../components/seo"

const Code = () => (
  <Layout>
    <SEO title="Coding Projects" />
    <h1>Coding Projects</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Code
