module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },


plugins: [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: '4ljfodfdmc31',
      accessToken: 'a197275a01845cbac236664efdfcacdefeb4a175c144de2fcab9deec62edd861'
    }
  }
],
}