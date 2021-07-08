// style
import "../../styles/styles.scss"
import "katex/dist/katex.min.css"

import CommentSection from "../components/CommentSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import React from "react"
import Tags from "../components/Tags"
import { graphql } from "gatsby"

// main template
const Template = ({ data }) => {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  const tags = post.frontmatter.tags
  return (
    <body>
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="blog-post-entries">
            <Helmet
              title={`${process.env.GATSBY_SITE_NAME} - ${post.frontmatter.title}`}
            />
            <div className="blog-post">
              <div className="blog-post-header">
                <h1>{post.frontmatter.title}</h1>
                <div className="tags">
                  <div className="date-time">
                    {post.frontmatter.date} &middot; {post.timeToRead}{" "}
                    {"min. read"}
                  </div>
                  <div className="tag-list">
                    {tags ? <Tags>{tags}</Tags> : null}
                  </div>
                </div>
              </div>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
            <CommentSection postInfo={post} />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  )
}

// query Markdown pages
export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        tags
      }
      id
      timeToRead
    }
  }
`

export default Template
