import React from "react"

const Emoji = (props) => (
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
          I am a curious Engineer having fun developing cloud native solutions. I currently live in Berlin.
          <br />
          <br />
          I like to develop solutions to real-world problems with system design, Machine Learning, MLOps and Distrbuted Computing.
          <br />
          <br /> I am taking notes during my learning. I may share some of them in a notes <Emoji symbol="📓" /> section.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="social-logo">
        </div>
      </div>
    </div>
  </div>
)

export default IndexWelcome
