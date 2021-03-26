import { Link } from 'gatsby'
import { MdKeyboardArrowRight } from 'react-icons/md';
import React from 'react'

class LeftArrows extends React.Component {
    render() {
        return (
            <h2>
                <Link to='/resume'><MdKeyboardArrowRight /></Link>
            </h2>
        )
    }
}

// The header has container with a navigation bar
const IndexWelcome = () => (
    <div className='container'>
        <div className='index-block'>
            <div container>
                <div className="blog-post-content">
                    <h1>Welcome!</h1>
                            I am a Data Scientist/Engineer having fun developing cloud native solutions. I currently live in Berlin.
                            <br />
                            I like to design systems, specially interested in Machine Learning, MLOps and Data-Intensive Computing.
                            <br />
                            I really enjoy learning and apply new concept practically to solve real problems.
                            Since Im taking notes constantly while learning a new subject, I will be posting some of them from time to time in the <Link to="/blog">blog</Link> section.
                            <br />
                    <div className='social-logo'><LeftArrows /></div>
                </div>
            </div>
        </div>
    </div >
)

export default IndexWelcome
