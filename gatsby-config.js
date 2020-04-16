module.exports = {
  siteMetadata: {
    title: `Fernando Zepeda`,
    description: `Personal website`,
    author: `Fernando Zepeda`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "Fernando Zepeda",
        "short_name": "Fernando Zepeda",
        "theme_color": "#101823",
        "background_color": "#101823",
        "display": "standalone",
        "orientation": "portrait",
        "start_url": "./about",
        "icon": "static/favicons/favicon-32x32.png",
        "icons": [
          {
            "src": "static/favicons/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          },
          {
            "src": "static/favicons/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "static/favicons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "static/favicons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "static/favicons/apple-touch-icon.png",
            "sizes": "16x16",
            "type": "image/png"
          }
        ],
        "splash_pages": null
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // add further plugins 
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify'
  ],
}
