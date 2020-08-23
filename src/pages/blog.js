import '../../styles/styles.scss'

import { Link, graphql } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"
import Img from 'gatsby-image';
import MetaData from "../components/metaData"
import PostLink from "../components/post-link"
import React from "react"

const BlogIndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const IndexPage =
    <div className="wrapper">
      <div className="container">
        <div className="index-block">
          <div container>
            <MetaData />
            <Header />
            <div className="blog-container">
              <h1>Blog Posts </h1>
              {Posts}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  return IndexPage
}

export default BlogIndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`