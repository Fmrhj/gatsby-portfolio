// style
import '../../styles/styles.scss';

import Footer from "../components/footer"
import Header from '../components/header'
import { Helmet } from "react-helmet"
import { Img } from 'gatsby-image'
import React from "react"
import Tags from '../components/tags'
import Typography from '@material-ui/core/Typography';

// main template
export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  const tags = post.frontmatter.tags
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="blog-post-entries">
          <Helmet title={`Fernando Zepeda - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <Typography variant="subtitle1" color="secondary">
              {post.frontmatter.date} &middot; {post.timeToRead} {'min. read'} &middot;
              {tags ? (<Tags>{tags}</Tags>) : null}
            </Typography>
            <h3>{post.frontmatter.description}</h3>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

// query Markdown pages
export const query = graphql`
  query($path: String!) {
          markdownRemark(frontmatter: {path: {eq: $path } }) {
          html
      frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          description
          tags
      }
      timeToRead
    }
}
`