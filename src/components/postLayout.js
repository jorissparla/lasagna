import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

const PostLayout = props => {
  const { markdownRemark } = props.data;
  console.log('Props', props.pageContext);

  return (
    <Layout location={props.location}>
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </Layout>
  );
};

export default PostLayout;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`;
