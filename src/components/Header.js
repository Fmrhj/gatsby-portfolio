import { Link } from "gatsby"
import React from "react"
import * as style from "../../styles/activePink"
import {
  Button
} from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="navigation">
            <nav>
              <Link to="/" activeStyle={style.activePink} >
                About
              </Link>
              <Link to="/resume" activeStyle={style.activePink}>
                Resume
              </Link>
            </nav>
            <Button href="/contact" variant="outlined" size="small" startIcon={<ChatBubbleOutlineIcon />}>Contact</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
