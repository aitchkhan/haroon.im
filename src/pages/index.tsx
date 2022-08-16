import * as React from "react"
import LandingBio from "../components/landing-bio"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <LandingBio />
      
    </div>
  </Layout>
)

export default IndexPage
