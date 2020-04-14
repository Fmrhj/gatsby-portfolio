import React from "react"
import '../../styles/styles.scss'
import { Link } from "gatsby"
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn} from "react-icons/fa";
import { FiMessageSquare} from "react-icons/fi";


// import components

import Header from "../components/header"

class GitHubLogo extends React.Component {
    render() {
        return <h3> <GoMarkGithub /> </h3>
    }
}

class LinkedinLogo extends React.Component {
    render() {
        return <h3> <FaLinkedinIn /> </h3>
    }
}

class EmailLogo extends React.Component {
    render() {
        return <h3> <FiMessageSquare /> </h3>
    }
}

const ContactPage = () => (
    <div>
        <Header />
        <div className="container">
            <div className="contactList">
                <table>
                    <tr>
                        <th><GitHubLogo></GitHubLogo></th>
                        <td><a href="mailto:fernando.zepeda@pm.me">fernando.zepeda@pm.me</a></td>
                    </tr>
                    <tr>
                        <th><LinkedinLogo></LinkedinLogo> </th>
                        <td></td>
                    </tr>
                    <tr>
                        <th><EmailLogo></EmailLogo></th>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
)

export default ContactPage