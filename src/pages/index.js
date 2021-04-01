import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Navbar from '../components/Navbar'
export default () => {
  
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs/>
      <Projects titles="featured projects" showLink/>
    </Layout>
  )
}
// export const query = graphql`
//   {
//     allStrapiProjects(filter: {featured: {eq: true}}) {
//       nodes {
//         github
//         id
//         description
//         title
//         url
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         stack {
//           id
//           title
//         }
//       }
//     }
//   }
// `