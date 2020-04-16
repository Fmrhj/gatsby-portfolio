import { Link } from "gatsby"
import React from "react"

import '../../styles/styles.scss'

const activeStyle = {
  color: "purple"
}

// The header has container with a navigation bar
const Header = ({ siteTitle }) => {

  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">Fernando Zepeda</Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/about" activeStyle={ activeStyle }>About</Link>
              <Link to="/resume" activeStyle={ activeStyle }>Resume</Link>
              <Link to="/contact" activeStyle={ activeStyle }>Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
