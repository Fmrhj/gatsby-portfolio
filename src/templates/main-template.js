import React from "react"
import { Helmet } from "react-helmet"
import {graphql} from "gatsby"

// style
import '../../styles/styles.scss'; 

// import components 
import Header from '../components/header'

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
            <h3>{post.frontmatter.description}</h3>

          </div>
        </div>
      </div>
    </div>

  )
}

// query Markdown pages
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`