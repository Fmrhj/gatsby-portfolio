import Helmet from 'react-helmet'
import React from 'react'
import { Script } from 'gatsby';
import React, { Fragment } from 'react';


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
            <Fragment>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID}`}
                        strategy="off-main-thread"
                        forward={[`gtag`]}
                    />
                    <Script
                        id="gtag-config"
                        strategy="off-main-thread"
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                                    window.gtag = function gtag(){ window.dataLayer.push(arguments);}
                                    gtag('js', new Date()); 
                                    gtag('config', '${process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID}', { send_page_view: false })`
                        }}
                    />
            </Fragment>
        </div>
    )
}

export default MetaData
