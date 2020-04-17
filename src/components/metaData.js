import React from "react"
import Helmet from "react-helmet"

import SEO from "../components/seo" 


const MetaData = () => {
    return(
        <div>
        <SEO title="Fernando Zepeda"
        description="Data Scientist, Cloud Engineer. Curious and relentless learner"
        >
        </SEO>
        <Helmet title="Fernando Zepeda"/>
        </div>

    )
}

export default MetaData
