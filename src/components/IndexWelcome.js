import React, { Component } from "react"

import { Link } from "gatsby"
import { MdKeyboardArrowRight } from "react-icons/md"

class LeftArrows extends Component {
  render() {
    return (
      <h2>
        <Link to="/resume">
          <MdKeyboardArrowRight />
        </Link>
      </h2>
    )
  }
}

// The header has container with a navigation bar
const IndexWelcome = () => (
  <div className="container">
    <div className="index-block">
      <div container>
        <div className="blog-post-content">
          <h1>Welcome!</h1>
          I am a Data Scientist/Engineer having fun developing cloud native
          solutions. I currently live in Berlin.
          <br />
          <br />
          I like to design systems, specially interested in Machine Learning,
          MLOps and Data-Intensive Computing.
          <br />
          <br />I really enjoy learning and apply new concepts practically to
          solve real problems. Since I'm constantly taking notes and drawing
          ideas while learning a new subject, I will be posting some of them
          from time to time in the <Link to="/notes">notes</Link> section.
          <br />
          <div className="social-logo">
            <LeftArrows />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexWelcome
