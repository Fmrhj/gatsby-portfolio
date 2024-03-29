import "../../styles/styles.scss"

import Footer from "../components/Footer"
import Header from "../components/Header"
import MetaData from "../components/MetaData"
import PostLink from "../components/PostLink"
import React from "react"
import { graphql } from "gatsby"

const BlogIndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const IndexPage = (
    <body>
      <div className="wrapper">
        <div className="container">
          <Header />
          <MetaData />
          <div className="blog-post-container">
            <div className="block-blog-post-wrapper">
              <h1>Notes</h1>
              {Posts}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  )

  return IndexPage
}

export default BlogIndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { glob: "**/**/_content/blog/**/*.md" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            description
            thumbnail
            tags
          }
        }
      }
    }
  }
`
