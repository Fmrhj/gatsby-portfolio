import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      firstPic: file(relativePath: { eq: "pattern.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    secondPic: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Fernando Zepeda</div>
                    <div className="main-image">
                    <Img fluid={data.firstPic.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner