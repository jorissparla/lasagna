import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;
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
            <ArchiveList>
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
            </ArchiveList>
          </aside>
        </>
      );
    }}
  />
);

export default Archive;
