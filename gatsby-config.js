module.exports = {
  siteMetadata: {
    title: `Fernando Zepeda`,
    description: `Data Scientist and Cloud Engineer. Curious and relentless learner`,
    author: `Fernando Zepeda`,
    siteUrl: `https://www.fernandozepeda.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.fernandozepeda.io/',
          site_name: 'Fernando Zepeda',
          description: 'Data Scientist and Cloud Engineer. Curious and relentless learner.',
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/`
      },
    },
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
    'gatsby-plugin-netlify',
    // alow gatsby-emoticons
    {
      resolve: 'gatsby-remark-emojis',
      options: {
        // Deactivate the plugin globally (default: true)
        active: true,
        // Add a custom css class
        class: 'emoji-icon',
        // In order to avoid pattern mismatch you can specify
        // an escape character which will be prepended to the
        // actual pattern (e.g. `#:poop:`).
        escapeCharacter: '#', // (default: '')
        // Select the size (available size: 16, 24, 32, 64)
        size: 64,
        // Add custom styles
        styles: {
          display: 'inline',
          margin: '0',
          'margin-top': '1px',
          position: 'relative',
          top: '5px',
          width: '25px'
        }
      }
    }

  ],
}
