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
          <p> Hi, I’m Fernando Zepeda, a software engineer based in <CustomChip label="Berlin" />. 
          I specialize in crafting data solutions that address real-world challenges. </p>
          <p> I develop systems designed to handle and process large volumes of data. My work centers on data engineering and machine learning, with main emphasis on creating solutions that deliver substantial, scalable impact for people and organizations.</p>
          <p> My primary expertise lies in <MarkPurple label="Data Engineering" /> and <MarkPurple label="Machine Learning" />, with a particular focus on <MarkPurple label="Operalization of Machine Learning" />. </p>
          </div>
        </div>
      </div>
    </section>
    <div className="spacer layer"></div>
  </div>
);

export default IndexWelcome;
