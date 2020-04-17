import React from "react"
import { Helmet } from "react-helmet"

// style
import '../../styles/styles.scss'; 

// import components 
import Header from '../components/header'
import SEO from '../components/SEO'

// main template
export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <div className="wrapper">
      <SEO />
      <Header />
      <div className="container">
        <div className="blog-post-container">
          <Helmet title={`Fernando Zepeda - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h2>{post.frontmatter.title}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`