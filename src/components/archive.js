import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
  query blogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => {
      console.log(allMarkdownRemark);
      return (
        <>
          <aside>
            <h3>Archive</h3>
            <ul>
              {allMarkdownRemark.edges.map(
                ({
                  node: {
                    frontmatter: { title, slug },
                  },
                }) => {
                  return (
                    <li key={slug}>
                      <Link to={`/posts${slug}`}>{title}</Link>
                    </li>
                  );
                }
              )}
            </ul>
          </aside>
        </>
      );
    }}
  />
);

export default Archive;
