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
  <div>
    <section class="comboPurple">
      <div className="container">
        <div className="index-block">
          <div container>
            <div className="blog-post-content">
              <h1>Welcome!</h1>
              <p>I am an Engineer having fun developing cloud native solutions. I currently live in <mark class="purple">Berlin</mark>.</p>
              <p>I like to find solutions to real-world problems applying pragmatic system design, <mark class="purple">Machine Learning (ML)</mark>, MLOps and Distributed Computing.</p>
              <p>I am taking notes during my learning. I may share some of them in a notes <Emoji symbol="📓" /> section.</p>
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
    </section><div class="containerCurve"></div>
  </div>
)

export default IndexWelcome
