import React from "react"
import { Link } from "gatsby"

// icons 
import { MdKeyboardArrowRight } from "react-icons/md";

class LeftArrows extends React.Component {
    render() {
        return (
            <h2>
                <Link to="/about"><a><MdKeyboardArrowRight /></a></Link>
            </h2>
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
                    Here you will find some information about me and different channels where we can stay in touch.
                    <br />
                    <br />
                    I am building a small blog and will be posting soon a series of articles documenting my latest learnings.
                    </p>
                    <div className="social-logo"><LeftArrows /></div>
                </div>
            </div>
        </div>
    </div>
)

export default IndexWelcome
