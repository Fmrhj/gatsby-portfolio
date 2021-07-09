import "../../styles/styles.scss"

import React, { Component } from "react"

import { FaLinkedinIn } from "react-icons/fa"
import { FiMessageSquare } from "react-icons/fi"
import { GoMarkGithub } from "react-icons/go"
import PropTypes from "prop-types"

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

class GenericLogo extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    mail: PropTypes.bool,
    icon: PropTypes.any,
  }
  static defaultProps = {
    mail: false,
  }

  _addMailToRef = inputText => {
    let hrefText = this.props.mail ? `mailto:${inputText}` : inputText
    return hrefText
  }

  render() {
    let hrefValue = this._addMailToRef()
    return (
      <div>
        <a href={hrefValue} className="social-logo-footer">
          {this.props.icon}
        </a>
      </div>
    )
  }
}

export { GitHubLogo, LinkedinLogo, EmailLogo, GenericLogo }
