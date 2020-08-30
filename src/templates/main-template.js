// style
import '../../styles/styles.scss';

import Footer from "../components/footer"
import Header from '../components/header'
import { Helmet } from "react-helmet"
import React from "react"
import { graphql } from "gatsby"

// main template
export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="blog-post-container">
          <Helmet title={`Fernando Zepeda - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}

            />
          </div>
          <div class="push"></div>
        </div>

      </div>
      <Footer />
    </div>

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
      }
    }
}
`