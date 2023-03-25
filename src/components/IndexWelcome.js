import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import {
  Chip
} from "@mui/material";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>);

const CustomChip = (props) => (
  <Chip label={props.label} variant="filled" style={{ backgroundColor: "#f78da7" , color: "black", fontSize: "medium"}} />
);

const MarkPurple = (props) => (
  <mark className="purple">{props.label}</mark>
)

// The header has container with a navigation bar
const IndexWelcome = () => (
  <div>
    <section className="dark">
      <div className="container">
        <div className="index-block">
          <div className="profile-pic-container">
            <div className="profile-pic">
              <StaticImage
                src="../images/pm.png"
                alt="profile-pic"
                placeholder="blurred"
                width={250}
                height={250}
              />
            </div>
            <div>
            </div>
          </div>
          <h1>Welcome <Emoji symbol="👋🏽" /></h1>
          <div container>
            <p>I am Fernando, an Engineer having fun building cloud native solutions and products. I am currently based in <CustomChip label="Berlin" />.</p>
            <p>My work focuses on finding practical solutions to real-world problems using scalable system design, <MarkPurple label="Data Engineering" />, <MarkPurple label="Machine Learning" /> and <MarkPurple label="Machine Learning Operations" />.</p>
            <p>I am taking notes during my learning. I may share some of them in a notes <Emoji symbol="📓" /> section.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="spacer layer"></div>
  </div>
)

export default IndexWelcome
