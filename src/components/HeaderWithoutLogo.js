import "../../styles/styles.scss"

import { Link } from "gatsby"
import React from "react"

const activeStyle = {
  color: "#660f57",
  fontWeight: "bold",
  textDecoration: "none",
}

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/"></Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/" activeStyle={activeStyle}>
                About
              </Link>
              <Link to="/resume" activeStyle={activeStyle}>
                Resume
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
