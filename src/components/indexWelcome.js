import { Link } from "gatsby"
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react"

class LeftArrows extends React.Component {
    render() {
        return (
            <h2>
                <Link to="/about"><MdKeyboardArrowRight /></Link>
            </h2>
        )
    }
}

// The header has container with a navigation bar
const IndexWelcome = () => (
    <div className="container">
        <div className="index-block">
            <div container>
                <h1>Hi, welcome!</h1>
                <p>

                    Here you will find <Link to="contact">some channels</Link> where we can stay in touch.
                    <br />
                    <br />
                    I like also to take some notes while I am learning a new subject and I will be posting them in the <Link to="blog">blog</Link> section.
                    </p>
                <div className="social-logo"><LeftArrows /></div>
            </div>
        </div>
    </div>
)

export default IndexWelcome
