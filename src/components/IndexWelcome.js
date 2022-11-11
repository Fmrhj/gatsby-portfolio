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
    <section className="dark">
      <div className="container">
        <div className="index-block">
          <div className="text-shadows"><h1>Welcome!</h1></div>
          <div container>

              <p>I am an Engineer having fun developing cloud native solutions. I currently live in <mark className="purple">Berlin</mark>.</p>
              <p>I like to find solutions to real-world problems applying pragmatic system design, <mark className="purple">Machine Learning (ML)</mark>, MLOps and Distributed Computing.</p>
              <p>I am taking notes during my learning. I may share some of them in a notes <Emoji symbol="📓" /> section.</p>
              <br />
              <br />
              <br />

              <br />
          </div>
        </div>
      </div>
    </section>
    <section className="dark"></section>
    <section className="dark"></section>
    <div class="spacer layer"></div>
  </div>
)

export default IndexWelcome
