import React from "react"
import '../../styles/styles.scss'

// import components
import MetaData from "../components/metaData"
import Header from "../components/header"
import AboutBlock from "../components/aboutBlock"

const AboutPage = () => (
  <div className="wrapper">
    <MetaData />
    <Header /> 
    <AboutBlock />   
  </div>
)

export default AboutPage
