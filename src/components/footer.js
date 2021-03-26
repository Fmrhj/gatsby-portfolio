import '../../styles/styles.scss'

import Link from '@material-ui/core/Link';
import React from 'react'
import SocialFooter from './socialFooter';

// The header has container with a navigation bar
const Footer = () => {

    return (
        <footer class='footer'>
            <div className='site-footer'>
                <div class='container'>
                    <div className='footer-content'>
                        <a><SocialFooter /></a>
                        <a><Link color='inherit' href={`${process.env.GATSBY_SITE_URL}`}>
                            {process.env.GATSBY_SITE_NAME} </Link> &copy; {new Date().getFullYear()}</a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
