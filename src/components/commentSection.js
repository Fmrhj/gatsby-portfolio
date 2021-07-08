import Disqus from "gatsby-plugin-disqus"
import React from "react"

const CommentSection = ({ postInfo }) => (
  <div>
    <Disqus
      identifier={postInfo.id}
      title={postInfo.frontmatter.title}
      url={`${process.env.GATSBY_SITE_URL}${postInfo.frontmatter.path}`}
    />
  </div>
)

export default CommentSection
