import React, { useMemo } from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import safeGet from 'lodash.get'

const Thumbnail = ({ src }) => {
  const data = useStaticQuery(graphql`
  query {
    allFile( filter: { internal: { mediaType: { regex: "/image/" } } } ) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 300) {
            src
            srcSet
            srcSetWebp
            aspectRatio
            base64
            tracedSVG
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  }
`)

  const match = useMemo(() => (
    data.allFile.nodes.find(({ relativePath }) => `/` + relativePath === src)), [data, src])

  const fluid = safeGet(match, 'childImageSharp.fluid')

  return (
    <Img
      fluid={fluid}
      Tag='div'
    />
  )

}

export default Thumbnail
