module.exports = {
  siteMetadata: {
    title: "ilumin.dev",
    description: `@ilumin notes`,
    author: "@ilumin",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        // logo: `static/favicon/logo.png`,
        showDate: true,
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `@ilumin Notes`,
        short_name: `ilumin.dev`,
        description: `@ilumin memory bank`,
        start_url: `/`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
        display: `standalone`,
        icon: `static/favicon/logo.png`,
        showDate: true,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`],
      },
    },
  ],
};
