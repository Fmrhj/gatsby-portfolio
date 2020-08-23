import '../../styles/styles.scss'

import Footer from "../components/footer"
import Header from "../components/header_without_logo"
import IndexWelcome from "../components/indexWelcome"
// import components
import MetaData from "../components/metaData"
import React from "react"

const IndexPage = () => (
  <div>
    <MetaData />
    <Header />
    <IndexWelcome />
    <Footer />
  </div>
)

export default IndexPage
