import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Chip } from "@mui/material";


const Emoji = ({ symbol, label }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

const CustomChip = ({label}) => (
  <Chip className="chip" label={label} variant="filled" style={{ backgroundColor: "#f78da7", color: "black", fontSize: "medium" }} />
);


const MarkPurple = ({ label }) => (
  <mark className="purple">{label}</mark>
);

const IndexWelcome = () => (
  <div>
    <section className="dark">
      <div className="container">
        <div className="index-block">
          <div className="profile-pic-container">
            <div className="profile-pic">
              <StaticImage
                src="../images/pm.png"
                alt="Fernando Zepeda's profile picture"
                placeholder="blurred"
                width={250}
                height={250}
              />
            </div>
          </div>
          <h1>Welcome <Emoji symbol="👋🏽" label="Waving hand" /></h1>
          <div>
            <p>
              Hi, I’m Fernando Zepeda, a data engineer based in <CustomChip label="Berlin" />. 
              I build data solutions that solve real problems.
            </p>
            <p>
              I create systems that handle and process large amounts of data efficiently.
              My work focuses on data engineering and machine learning.
            </p>
            <p>
              My main areas are <MarkPurple label="Data Engineering" /> and <MarkPurple label="Machine Learning" />,
              with a special focus on <MarkPurple label="Machine Learning Operations (ML Ops)" />.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="spacer layer"></div>
  </div>
);

export default IndexWelcome;
