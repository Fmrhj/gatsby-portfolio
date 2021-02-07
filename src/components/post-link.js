import { StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import { Link } from 'gatsby';
import React from "react";

const PostLink = ({ post }) => (
  < div className="block-blog-posts-container" >
    <Link to={post.frontmatter.path}>
      <div className="thumbnail">
        <Image />
      </div>
      <div className="content">
        <h3>{post.frontmatter.title}</h3>
        <small>{post.frontmatter.date}</small>
        <p>{post.frontmatter.description} </p>
        <div className="more">(read more)</div>
      </div>
    </Link>
  </div >
)

export default PostLink

const Image = ({ post }) => (
  < StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "OpenCL_Logo.png" }) {
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
    `}
    render={data => (
      <>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </>
    )}
  />
)
