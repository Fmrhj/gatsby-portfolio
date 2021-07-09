import "../../styles/styles.scss"

import React, { Component } from "react"

import { FaLinkedinIn } from "react-icons/fa"
import { FiMessageSquare } from "react-icons/fi"
import { GenericLogo } from "./SocialLogos"
import { GoMarkGithub } from "react-icons/go"

class GitHubLogo extends Component {
  render() {
    return (
      <a href={`${process.env.GATSBY_GITHUB}`} class="social-logo-footer">
        <GoMarkGithub />
      </a>
    )
  }
}

class LinkedinLogo extends Component {
  render() {
    return (
      <a href={`${process.env.GATSBY_LINKEDIN}`} className="social-logo-footer">
        <FaLinkedinIn />
      </a>
    )
  }
}

class EmailLogo extends Component {
  render() {
    return (
      <a
        href={`mailto:${process.env.GATSBY_EMAIL}`}
        className="social-logo-footer"
      >
        <FiMessageSquare />
      </a>
    )
  }
}

const SocialFooter = () => {
  return (
    <div className="social-logos-row">
      <div className="each-logo">
        <GenericLogo icon={<GitHubLogo />} />
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
