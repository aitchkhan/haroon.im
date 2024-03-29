import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => {
  const data = useStaticQuery(graphql`
    query siteMetaDataQueryTitle {
      site {
        siteMetadata {
          title
          work
        }
      }
    }
  `)
  return (
    <OuterContainer>
      <Container>
        <NameHeader>{data.site.siteMetadata.title}</NameHeader>
        <Description>{data.site.siteMetadata.work}</Description>
      </Container>
    </OuterContainer>
  )
}

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
