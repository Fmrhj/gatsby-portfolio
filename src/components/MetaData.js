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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-2GGJ9WQDJH"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());
    
                      gtag('config', 'G-2GGJ9WQDJH');
                </script>
            </Helmet>
        </div>
    )
}

export default MetaData
