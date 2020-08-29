
const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require(`gatsby-remark-relative-images-v2`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;


  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    fmImagesToRelative(node);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  };
};

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

}