import React from "react";
import { Chip } from "@mui/material";

// Emoji component with improved accessibility
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

// CustomChip component with descriptive text for better accessibility
const CustomChip = ({ label }) => (
  <Chip
    label={label}
    variant="filled"
    style={{ backgroundColor: "#f78da7", color: "black", fontSize: "medium" }}
    aria-label={`Location: ${label}`}
  />
);

// MarkPurple component to emphasize key terms
const MarkPurple = ({ label }) => (
  <mark className="purple">{label}</mark>
);

// Main component with improved text and structure
const IndexWelcome = () => (
  <div>
    <section className="dark">
      <div className="container">
        <div className="index-block">
          <h1>
            Welcome <Emoji symbol="👋🏽" label="waving hand" />
          </h1>
          <div>
            <p>
              Hi, I'm Fernando, an engineer based in <CustomChip label="Berlin" />. I specialize in creating data-driven solutions that address real-world challenges.
            </p>
            <p>
              My work involves building scalable systems that manage and process large volumes of data efficiently.
            </p>
            <p>
              Key areas of expertise include <MarkPurple label="Data Engineering" />, <MarkPurple label="Machine Learning" />, with a strong focus on <MarkPurple label="Machine Learning Operations (ML Ops)" />.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="spacer layer"></div>
  </div>
);

export default IndexWelcome;