/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityPainting {
        totalCount
        edges {
          node {
            category
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const paintings = result.data.allSanityPainting.edges.map(({ node }) => node);

  paintings.forEach(painting => {
    actions.createPage({
      path: `${painting.category}/${painting.slug.current}`,
      component: path.resolve("./src/templates/painting.js"),
      context: {
        slug: painting.slug.current,
        category: painting.category.toString(),
      },
    });
  });
};
