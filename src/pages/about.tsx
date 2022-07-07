import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Container = styled.div`
  text-align: center;
`

const About = () => {
  return (
    <Layout>
      <Seo title="About Haroon Khan" />
      <Container>
        <h1>
          This page is <b>about me</b>
        </h1>
        In the coming days, I will write about where I want to see EhsaanTech in
        5 years from here.
      </Container>
    </Layout>
  )
}

export default About
