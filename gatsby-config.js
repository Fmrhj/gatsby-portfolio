require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "en_EN",
          title: process.env.GATSBY_SITE_NAME,
          url: process.env.GATSBY_SITE_URL,
          site_name: process.env.GATSBY_SITE_NAME,
          description: process.env.GATSBY_SITE_DESCRIPTION,
          meta: "some informations about me",
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog-content`,
        path: `${__dirname}/_content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.GATSBY_SITE_NAME,
        short_name: process.env.GATSBY_SITE_NAME,
        description: process.env.GATSBY_SITE_DESCRIPTION,
        theme_color: process.env.GATSBY_SITE_THEME_COLOR,
        background_color: process.env.GATSBY_SITE_BACKGROUND_COLOR,
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        icon: "static/favicons/favicon-32x32.png",
        icons: [
          {
            src: "static/favicons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "static/favicons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "static/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "static/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          // gatsby-remark-relative-images-v2 must
          // go before gatsby-remark-images
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,
              class: "emoji-icon",
              escapeCharacter: "",
              size: 64,
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px",
              },
            },
          },
        ],
      },
    },
    /*{
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: process.env.GATSBY_DISQUS_ID,
      },
    },*/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "fernandozepeda.io",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    // add further plugins
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sharp`
  ],
}
