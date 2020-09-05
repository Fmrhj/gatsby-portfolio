import '../../styles/styles.scss'

import Footer from "../components/footer"
import Header from "../components/header_without_logo"
import IndexWelcome from "../components/indexWelcome"
import MetaData from "../components/metaData"
import React from "react"

const IndexPage = () => (
  <body>
    <div className="wrapper">
      <MetaData />
      <Header />
      <IndexWelcome />
      <div className="push"></div>
    </div>
    <Footer />
  </body>
)

export default IndexPage
