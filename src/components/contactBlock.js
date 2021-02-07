import { FaLinkedinIn } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go';
import React from 'react'

class GitHubLogo extends React.Component {
    render() {
        return (<h2>
            <a href={`${process.env.GATSBY_GITHUB}`} class='social-logo'><GoMarkGithub /> </a>
        </h2>)
    }
}

class LinkedinLogo extends React.Component {
    render() {
        return (<h2>
            <a href={`${process.env.GATSBY_LINKEDIN}`} class='social-logo'> <FaLinkedinIn /> </a> </h2 >)
    }
}

class EmailLogo extends React.Component {
    render() {
        return (<h2>
            <a href={`mailto:${process.env.GATSBY_EMAIL}`} class='social-logo'><FiMessageSquare />
            </a></h2>)
    }
}

const ContactBlock = () => (
    <div className="container">
        <div className="contactList">
            <table>
                <tr><GitHubLogo /></tr>
                <tr><LinkedinLogo /></tr>
                <tr><EmailLogo /></tr>
            </table>
            <div className="contact-text">
                <h1>Contact me!</h1>
                <p>Just drop me a message or send me a PM.
                <br />
                I am happy to start a new conversation and exchange ideas.</p>
            </div>
        </div>
    </div >
)

export default ContactBlock