import { FaLinkedinIn } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
// icons 
import { GoMarkGithub } from "react-icons/go";
import React from "react"

class GitHubLogo extends React.Component {
    render() {
        return (<h2>
            <a href="https://github.com/Fmrhj" class="social-logo">
                <GoMarkGithub /> </a>
        </h2>)
    }
}

class LinkedinLogo extends React.Component {
    render() {
        return (<h2>
            <a href="https://www.linkedin.com/in/fernando-zepeda-4b83073a/"
                class="social-logo">
                <FaLinkedinIn /> </a>
        </h2>)
    }
}

class EmailLogo extends React.Component {
    render() {
        return (<h2>
            <a href="mailto:fernando.zepeda@pm.me" class="social-logo"><FiMessageSquare />
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
                I am always happy to connect in social media and to hear from you.</p>
            </div>
        </div>
    </div >
)

export default ContactBlock