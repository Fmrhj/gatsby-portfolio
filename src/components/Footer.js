import "../../styles/styles.scss"

import Link from "@material-ui/core/Link"
import React from "react"
import SocialFooter from "./SocialFooter"

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
            </a>
            <a>
              <Link color="inherit" href={`${process.env.GATSBY_SITE_URL}`}>
                {process.env.GATSBY_FOOTER_NAME}{" "}
              </Link>
              with {<Emoji symbol="❤️" />} &copy; {new Date().getFullYear()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
