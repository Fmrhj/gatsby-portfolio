import '../../styles/styles.scss'

import { Link } from 'gatsby'
import React from 'react'

const activeStyle = {
  color: '#521f6f',
  fontWeight: 'bold'
}

// The header has container with a navigation bar
const Header = ({ siteTitle }) => {

  return (
    <header>
      <div className='container'>
        <div className='inner-header'>
          <div className='logo'>
            <Link to='/'>Fernando Zepeda</Link>
          </div>
          <div className='navigation'>
            <nav>
              <Link to='/about' activeStyle={activeStyle}>About</Link>
              <Link to='/resume' activeStyle={activeStyle}>Resume</Link>
              <Link to='/blog' activeStyle={activeStyle}>Blog</Link>
              <Link to='/contact' activeStyle={activeStyle}>Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
