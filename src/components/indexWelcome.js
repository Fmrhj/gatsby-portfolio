import React from "react"
import { Link } from "gatsby"


// icons 
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

// images
import circleFoto from '../images/avatar.jpg'; // with import

class LeftArrows extends React.Component {
    render() {
        return (
            <h2>
                <Link to="/about"><a><MdKeyboardArrowRight /></a></Link>
            </h2>
        )
    }
}

class Email extends React.Component {
    render() {
        return (
            <h3>
                <a href="mailto:fernando.zepeda@pm.me" class="social-logo"><FiMail />
                </a></h3>
        )
    }
}

// The header has container with a navigation bar
const IndexWelcome = () => (
    <div className="wrapper">
        <div className="container">
            <div className="index-block">
                <div container>
                    <h1>Hello!</h1>
                    <p>I am <span class="highlight">Fernando</span>, nice to meet you!
                    <br />
                    Here you will find some information about me and channels where we can stay in touch.
                    <br />
                    <br />
                    In shortly I will be also posting a series of articles documenting my latest learnings.
                    </p>
                    <div className="social-logo"><LeftArrows /></div>
                </div>
            </div>
        </div>
    </div>
)

export default IndexWelcome