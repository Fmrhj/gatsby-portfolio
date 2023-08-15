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
  <Chip label={props.label} variant="filled" style={{ backgroundColor: "#f78da7", color: "black", fontSize: "medium" }} />
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
            <p>Hi, I'm Fernando, an engineer based in <CustomChip label="Berlin" /> building data solutions.</p>
            <p>My work revolves around solving real-world problems building scalable systems powered by *tons* of data. </p>
            <p>Key words: <MarkPurple label="Data Engineering" />, <MarkPurple label="Machine Learning" /> with a particular focus on <MarkPurple label="Machine Learning Operations (ML Ops)" />.</p>
            <br/>
            <br/>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
    <div class="spacer layer"></div>
  </div>
)

export default IndexWelcome
