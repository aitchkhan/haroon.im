import React from "react"
import Title from "./Title"
import Project from "./Project"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link,graphql,useStaticQuery } from "gatsby";

 const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
const Projects = ({titles,showLink}) => {
  const data = useStaticQuery(query);
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  const{title, description , github, stack, url, image, index} = projects[1]
  return (
  <section className="section projects">
    <Title title={titles} />
    <div className="section-center projects-center">
      {
        projects.map((item,index)=>{
          return(
            <article className="project">
      {image && (
        <Image fluid={item.image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{item.title || "default title"}</h3>
        <p className="project-desc">{item.description}</p>
        <div className="project-stack">
          
          {stack.map((item)=>{
            return(
              <span key={item.id}>{item.title}</span>
            )
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
          )
        })
      }
    </div>
    {
      showLink && <Link to='/projects' className="btn center-btn">projects</Link>
    }
  </section>
  )
}

export default Projects
