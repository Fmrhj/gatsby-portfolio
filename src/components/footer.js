import '../../styles/styles.scss'

import Link from '@material-ui/core/Link';
import React from "react"

// The header has container with a navigation bar
const Footer = ({ siteTitle }) => {

    return (
        <body>
            <div class="wrapper-footer">
                <div class="push"></div>
            </div>
            <footer>
                <div className="site-footer">
                    <div class="container">
                        <div className="footer-content">
                            <div >
                                <a><Link color="inherit" href="https://fernandozepeda.io/">
                                    Fernando Zepeda
      </Link> &copy; {new Date().getFullYear()}</a>
                            </div>
                            <div >
                                <nav class="site-footer-nav">
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </body>

    )
}

export default Footer
