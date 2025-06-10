import React, { memo } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Chip } from "@mui/material";

// Emojis with accessibility
const Emoji = memo(({ symbol, label }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ""}
    aria-hidden={!label}
  >
    {symbol}
  </span>
));

// Custom chip with consistent style
const CustomChip = memo(({ label }) => (
  <Chip
    className="chip"
    label={label}
    variant="filled"
    sx={{
      backgroundColor: "#f78da7",
      color: "black",
      fontSize: "medium",
    }}
  />
));

// Emphasis markup
const MarkPurple = memo(({ label }) => (
  <mark className="purple">{label}</mark>
));

const IndexWelcome = () => (
  <div>
    <section className="dark">
      <div className="container">
        <div className="index-block">
          <div className="profile-pic-container">
            <StaticImage
              className="profile-pic"
              src="../images/pm.png"
              alt="Fernando Zepeda's profile picture"
              placeholder="blurred"
              width={250}
              height={250}
            />
          </div>
          <h1>
            Welcome <Emoji symbol="👋🏽" label="Waving hand" />
          </h1>
          <div>
            <p>
              Hi, I’m Fernando, a software engineer based in{" "}
              <CustomChip label="Berlin" />.
              I specialize in crafting data solutions that address real-world challenges.
            </p>
            <p>
              I develop systems designed to handle and process large volumes of data.
              My work centers on data engineering and machine learning, focusing on
              solutions that deliver substantial, scalable impact.
            </p>
            <p>
              My primary expertise lies in <MarkPurple label="Data Engineering" /> and{" "}
              <MarkPurple label="Machine Learning" />, with a particular focus on{" "}
              <MarkPurple label="Operationalization of Machine Learning" />.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="spacer layer"></div>
  </div>
);

export default IndexWelcome;
