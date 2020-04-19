import React from "react"

import '../../styles/styles.scss'
import MetaData from "../components/metaData"

const NotFoundPage = () => {

  return (
    <div className="wrapper">
      <MetaData />
      <div className="container">
        <div className="not-found-block">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
