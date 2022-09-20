import { Divider } from "@mui/material"
import { Link } from "gatsby"
import React from "react"

const PostLink = ({ post }) => (
  <div className="block-blog-posts-container">
    <Link to={post.frontmatter.path}>
      <div className="content">
        <h3>{post.frontmatter.title}</h3>
        <small>{post.frontmatter.date}</small>
        <p>{post.frontmatter.description} </p>
        <div className="more">(read more)</div>
        <Divider />
      </div>
    </Link>
  </div>
)

export default PostLink
