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
              <br />
              <SocialFooter />
            </a>
            <div>
              <Link color="inherit" to="/imprint">Imprint</Link>
              <br />
              <a>
                <Link color="inherit" to={`${process.env.GATSBY_SITE_URL}`}>
                  {process.env.GATSBY_FOOTER_NAME}{" "}
                </Link>
                with {<Emoji symbol="❤️" />} &copy; {new Date().getFullYear()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
