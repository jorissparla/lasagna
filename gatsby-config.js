module.exports = {
  siteMetadata: {
    title: `Joris Development Blog`,
    description: `My most interesting findings here`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/standen`,
        name: 'standen',
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `https://api.graph.cool/simple/v1/cj8im0xou028m0165lk76wsvj`,
        typeName: `graphcool`,
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDA0MTAwMjcsImlhdCI6MTUzNzgxODAyNywicHJvamVjdElkIjoiY2o4aW0weG91MDI4bTAxNjVsazc2d3N2aiIsInVzZXJJZCI6ImNqOGltdnozZ2RrcTQwMTIwcGhhZHN1NGUiLCJhdXRoRGF0YSI6eyJlbWFpbCI6ImpvcmlzLnNwYXJsYUBnbWFpbC5jb20ifSwibW9kZWxOYW1lIjoiVXNlciJ9.4Ggst2Ojz2sP2QhMMB4GfMQfwmpO3bPd_Xzo1akepCc`,
        },
        refetchInterval: 60,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
