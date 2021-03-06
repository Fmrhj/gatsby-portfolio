import Helmet from 'react-helmet'
import React from 'react'

const MetaData = () => {
    return (
        <div className='application'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Fernando Zepeda</title>
                <meta name='description' content={`${process.env.GATSBY_SITE_DESCRIPTION}`} />
                <meta name='author' content={`${process.env.GATSBY_SITE_NAME}`} />
                <meta name='keywords' content='Data, Science, Engineering, Cloud, AI, Machine Learning' />
                <link rel='canonical' href={`${process.env.GATSBY_SITE_URL}`} />
            </Helmet>
        </div>
    )
}

export default MetaData
