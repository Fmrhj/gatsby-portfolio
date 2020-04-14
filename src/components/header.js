import { Link } from "gatsby"
import React from "react"

// The header has container with a navigation bar
const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Fernando Zepeda</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">/About</Link>
            <Link to="/resume">/Resume</Link>
            <Link to="/contact">/Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header >
)

export default Header
