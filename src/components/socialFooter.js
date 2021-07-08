import "../../styles/styles.scss"

import { EmailLogo, GenericLogo, GitHubLogo, LinkedinLogo } from "./SocialLogos"

import { FaLinkedinIn } from "react-icons/fa"
import { FiMessageSquare } from "react-icons/fi"
import { GoMarkGithub } from "react-icons/go"
import React from "react"

const SocialFooter = () => {
  return (
    <div className="social-logos-row">
      <div className="each-logo">
        <GenericLogo icon={<GoMarkGithub />} />
      </div>
      <div className="each-logo">
        <LinkedinLogo />
      </div>
      <div className="each-logo">
        <EmailLogo />
      </div>
    </div>
  )
}

export default SocialFooter
