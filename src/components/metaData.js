import React from "react"
import Helmet from "react-helmet"

const MetaData = () => {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fernando Zepeda</title>
                <meta name="description" content="Data Scientist self-learning cloud engineering. Curious about AI and documenting the journey." />
                <meta name="author" content="Fernando Zepeda">
                <meta name="keywords" content="Data, Science, Engineering, Cloud, AI, Machine Learning">
                <link rel="canonical" href="https://www.fernandozepeda.io" />
            </Helmet>
        </div>
    )
}

export default MetaData
