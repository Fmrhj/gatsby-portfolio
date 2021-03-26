import '../../styles/styles.scss'

import { FaLinkedinIn } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go';
import React from 'react';

class GitHubLogo extends React.Component {
    render() {
        return (
            <a href={`${process.env.GATSBY_GITHUB}`} class='social-logo-footer'>
                <GoMarkGithub />
            </a>
        )
    }
}

class LinkedinLogo extends React.Component {
    render() {
        return (
            <a href={`${process.env.GATSBY_LINKEDIN}`} className='social-logo-footer'>
                <FaLinkedinIn />
            </a>)
    }
}

class EmailLogo extends React.Component {
    render() {
        return (
            <a href={`mailto:${process.env.GATSBY_EMAIL}`} className='social-logo-footer'><FiMessageSquare />
            </a>)
    }
}


const SocialFooter = () => {
    return (
        <div className='social-logos-row'>
            <div className='each-logo'><GitHubLogo /></div>
            <div className='each-logo'><LinkedinLogo /></div>
            <div className='each-logo'><EmailLogo /></div>
        </div>
    )

}

export default SocialFooter;
