import '../../styles/styles.scss'

import Link from '@material-ui/core/Link';
import React from 'react'

// The header has container with a navigation bar
const Footer = () => {

    return (
        <footer class='footer'>
            <div className='site-footer'>
                <div class='container'>
                    <div className='footer-content'>
                        <div>
                            <a><Link color='inherit' href={`${process.env.SITE_URL}`}>
                                {process.env.SITE_NAME} </Link> &copy; {new Date().getFullYear()}</a></div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
