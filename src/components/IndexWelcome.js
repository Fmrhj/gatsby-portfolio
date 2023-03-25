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
            <p>Hi, I'm Fernando, an engineer based in <CustomChip label="Berlin" /> who loves building cloud-native solutions.</p>
            <p>My work revolves around solving real-world problems using scalable system design, <MarkPurple label="Data Engineering" />, and <MarkPurple label="Machine Learning" />, with a particular focus on <MarkPurple label="Machine Learning Operations (ML Ops)" />.</p>
            <p>To keep track of my learning, I maintain a notes section where I jot down my thoughts and insights. I may also share some of my notes <Emoji symbol="📓" /> what may help others in their learning journeys.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="spacer layer"></div>
  </div>
)

export default IndexWelcome
