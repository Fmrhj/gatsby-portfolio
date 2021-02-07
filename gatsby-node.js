const _ = require('lodash')
const path = require('path')

// load env variables
require('dotenv').config({
  path: `.env.${process.env.GATSBY_NODE_ENV}`,
})

const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;


  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    fmImagesToRelative(node);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  };
};

exports.createPages = async ({ graphql, actions }) => {

  const tagsTemplate = path.resolve('src/templates/tags-template.js')

  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              template
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
      context: {
        //   Data passed to context is available
        //in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  });

  // create Tags pages    
  // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files    
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`    
  _.each(result.data.allMarkdownRemark.edges, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags    
  tags = _.uniq(tags);
  // Make tag pages    
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagsTemplate,
      context: {
        tag,
      },
    });
  });
}