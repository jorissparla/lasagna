import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

const PostLayout = props => {
  const { markdownRemark } = props.data;
  console.log('Props', props.pageContext);

  return (
    <Layout>
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
      </div>
    </Layout>
  );
};

export default PostLayout;

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/firstpost" } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`;
