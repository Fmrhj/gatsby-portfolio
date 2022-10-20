import { Link } from "gatsby"
import React from "react"
import * as style from "../../styles/activePink"


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
          </div>
          <div className="navigation">
            <nav>
              <Link to="/" activeStyle={style.activePink} >
                About
              </Link>
              <Link to="/resume" activeStyle={style.activePink}>
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
