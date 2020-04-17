# Gatsby-portfolio [![Netlify Status](https://api.netlify.com/api/v1/badges/72f94f3e-cedc-42f9-a2ad-c37a91e78c70/deploy-status)](https://app.netlify.com/sites/reverent-turing-e9ef76/deploys)

Quick personal website to present some notes and myself to the world :earth_americas:.

![](https://media1.tenor.com/images/6eaab0d39bd1afa7be8985eb7ac2d28b/tenor.gif?itemid=4108687)

## Tech Stack 

Frontend development with [GatsbyJs](https://www.gatsbyjs.org/), a [React](https://reactjs.org/)-based, GraphQL powered, static site generator.

The builds are triggered by each git commit in th `master` branch in this repository and deployed to [Netlify CDN](https://www.netlify.com/). 

## `gatsby-config` 
Contains all the site's metadata, absolute path definition, `npm`plugins and other variables that can be configured. 

## Styles

The main configuration controlling the sytle of the website is the `.scss` file where we define the properties for all containers and `div` classes. The file is under `styles/styles.scss`.

## Pages
For fetching data, I used [Graphql](https://graphql.org/) which is seamlessly integrated within GatsbyJs. Most of the pages are saved in Markdown format and retrieved with GraphQl queries. Gatsby has the `gatsby-transformer-remark` plugin which recoginizes `.md`files and reads their content. The plugin will convert the frontmatter metadata part of your Markdown files as frontmatter and the content part as HTML. These are then rendered with use of a template in `src/templates/blogTemplate.js`

## :hammer: In construction

Blogging entries using Markdown files. 
