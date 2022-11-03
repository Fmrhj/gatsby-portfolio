import "../../styles/styles.scss"

import React from "react"
import SocialFooter from "./SocialFooter"
import { Link } from "gatsby"

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)


const Footer = () => {
  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="container">
          <div className="footer-content">
            <a>
              <SocialFooter />
              <br />
            </a>
            <div className="rightBottom">
              <Link to={`${process.env.GATSBY_SITE_URL}`}>
                {process.env.GATSBY_FOOTER_NAME}{" "}
              </Link>
              with {<Emoji symbol="❤️" />} &copy; {new Date().getFullYear()}
              <br />
              <div className="imprint">
                <Link color="inherit" to="/imprint">Imprint</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
