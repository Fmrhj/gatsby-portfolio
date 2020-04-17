import React from "react"
import Helmet from "react-helmet"

const MetaData = () => {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fernando Zepeda</title>
                <meta name="description" content="Data Scientist and Cloud Engineer. Curious and learning." />
                <link rel="canonical" href="https://www.fernandozepeda.io" />
            </Helmet>
        </div>
    )
}

export default MetaData
