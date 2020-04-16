import React from "react"

// icons 
import { GoMarkGithub } from "react-icons/go";

class GitHubLogo extends React.Component {
    render() {
        return (<h3>
            <a href="https://github.com/Fmrhj" class="social-logo">
                <GoMarkGithub /> </a>
        </h3>)
    }
}

const AboutBlock = () => (

    <div className="container">
        <div className="about-content">
            <div className="about-text">
                <h3>Hi!</h3>

                <p>My name is Fernando. I am ...
                I like ...</p>
            </div>
        </div>
    </div>
)

export default AboutBlock