import "../../styles/styles.scss"

import Footer from "../components/Footer"
import Header from "../components/Header"
import IndexWelcome from "../components/IndexWelcome"
import MetaData from "../components/MetaData"
import React from "react"

const IndexPage = () => (
  <body>
    <div className="wrapper">
      <MetaData />
      <Header />
      <IndexWelcome />
    </div>
    <Footer />
  </body>
)

export default IndexPage
