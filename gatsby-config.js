module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          // og:<tag>
          type: "website",
          locale: "en_DE",
          title: process.env.GATSBY_SITE_NAME,
          url: process.env.GATSBY_SITE_URL,
          site_name: process.env.GATSBY_SITE_NAME,
          description: process.env.GATSBY_SITE_DESCRIPTION,
          meta: "some informations about me",
        },
      },
    },
    /*{
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },*/
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
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.GATSBY_SITE_URL,
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
              escapeCharacter: "", // (default: '')
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
    // add further plugins
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
  ],
}
