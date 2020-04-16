import React from "react"

// icons 
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

class GitHubLogo extends React.Component {
    render() {
        return (<h3>
            <a href="https://github.com/Fmrhj" class="social-logo">
                <GoMarkGithub /> </a>
        </h3>)
    }
}

class LinkedinLogo extends React.Component {
    render() {
        return (<h3>
            <a href="https://www.linkedin.com/in/fernando-zepeda-4b83073a/"
                class="social-logo">
                <FaLinkedinIn /> </a>
        </h3>)
    }
}

class EmailLogo extends React.Component {
    render() {
        return <h3>
            <a href="mailto:fernando.zepeda@pm.me" class="social-logo">
                <FiMessageSquare /></a>
        </h3>
    }
}

const ContactBlock = () => (

    <div className="container">
        <div className="contactList">
            <table>
                <tr><th><GitHubLogo>s</GitHubLogo></th></tr>
                <tr><th><LinkedinLogo></LinkedinLogo> </th></tr>
                <tr><th><EmailLogo></EmailLogo></th></tr>
            </table>
            <div className="contact-text">
                <h3>Contact me!</h3>
                <p>Just drop me a message or send me a PM.
                Happy to connect in social media.
                </p>
            </div>
        </div>
    </div >
)

export default ContactBlock