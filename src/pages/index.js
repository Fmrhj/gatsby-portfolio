import React from "react"
import '../../styles/styles.scss'

// import components
import MetaData from "../components/metaData"
import Header from "../components/header_without_logo"
import IndexWelcome from "../components/indexWelcome"

const IndexPage = () => (
  <div>
    <MetaData />
    <Header />
    <IndexWelcome />
  </div>
)

export default IndexPage
