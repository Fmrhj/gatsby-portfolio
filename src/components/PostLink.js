import { Link } from "gatsby"
import React from "react"
import Thumbnail from "./Thumbnail"

const PostLink = ({ post }) => (
  <div className="block-blog-posts-container">
    <Link to={post.frontmatter.path}>
      <div className="thumbnail">
        <Thumbnail src={post.frontmatter.thumbnail} />
      </div>
      <div className="content">
        <h3>{post.frontmatter.title}</h3>
        <small>{post.frontmatter.date}</small>
        <p>{post.frontmatter.description} </p>
        <div className="more">(read more)</div>
      </div>
    </Link>
  </div>
)

export default PostLink
