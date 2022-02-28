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

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>);

// The header has container with a navigation bar
const IndexWelcome = () => (
  <div className="container">
    <div className="index-block">
      <div container>
        <div className="blog-post-content">
          <h1>Welcome!</h1>
          I am curious Engineer having fun developing cloud native
          solutions. I currently live in Berlin.
          <br />
          <br />
          I like to approach real-world problems using system design, Machine Learning, MLOps and Distrbuted Computing.
          <br />
          <br /> I am taking notes as I am learning. I may post some of them in a notes <Emoji symbol="📓" /> section.
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
