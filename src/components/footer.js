import '../../styles/styles.scss'

import { Link } from "gatsby"
import React from "react"

// The header has container with a navigation bar
const Footer = ({ siteTitle }) => {
    var CurrentYear = new Date().getFullYear()

    return (
        <div>
            <div class="pageContentWrapper">
            </div>
            <footer>
                <div className="site-footer">
                    <div class="container">
                        <div className="footer-content">
                            <div >
                                <a>Fernando Zepeda &copy; {CurrentYear}</a>
                            </div>
                            <div >
                                <nav class="site-footer-nav">
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
