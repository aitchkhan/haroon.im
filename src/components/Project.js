import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({description,title,github,stack,url,image,index}) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} 
      className="project-img"/>
    </article>
  )
}

Project.propTypes = {}

export default Project
