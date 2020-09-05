import '../../styles/styles.scss'

import MetaData from "../components/metaData"
import React from "react"

const NotFoundPage = () => {

  return (
    <body>
      <div className="wrapper">
        <MetaData />
        <div className="container">
          <div className="not-found-block">
            <h1>404 | Page not found</h1>
            <h2>Oops, something went wrong...</h2>
          </div>
        </div>
      </div>
    </body>
  )
}

export default NotFoundPage
