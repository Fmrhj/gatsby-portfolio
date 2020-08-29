import Img from 'gatsby-image';
import { Link } from "gatsby"
import React from "react"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

const PostLinkImage = ({ data }) => (
  <div>
    <Img fixed={data.file.childImageSharp.fixed}
      objectFit="cover"
      objectPosition="50% 50%"
      alt="" />
  </div>
)


export default PostLink

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "pattern.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`