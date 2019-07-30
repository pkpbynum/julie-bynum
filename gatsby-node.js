/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPrismicResearchProposal {
        edges {
          node {
            id
            type
            uid
            data {
              date
              title {
                text
              }
              long_description {
                raw {
                  text
                }
              }
              papers {
                link {
                  url
                }
                paper_title {
                  text
                }
              }
            }
          }
        }
      }
    }
  `).then(({ data: { allPrismicResearchProposal: { edges } } }) => {
    edges.forEach(
      ({
        node: {
          uid,
          data: {
            title: { text: title },
            long_description: { raw: longDescription },
            date,
            papers
          }
        }
      }) => {
        createPage({
          path: `/proposal/${uid}`,
          component: path.resolve(`./src/templates/ProjectSummary/index.js`),
          context: {
            title,
            date,
            longDescription,
            papers
          }
        })
      }
    )
  })
}
