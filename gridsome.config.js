// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Steff Beckers",
  siteDescription:
    "Personal website / Resume. Thoughts, stories and ideas. I write about Web Development and DevOps.",
  siteUrl: "https://steffbeckers.eu",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "content/blog/**/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "content/projects/**/*.md",
        refs: {
          skills: {
            typeName: "Skill"
          }
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Skill",
        path: "content/skills/**/*.md"
      }
    }
  ],
  templates: {
    BlogPost: "/blog/:slug",
    Project: "/portfolio/:slug"
  },
  permalinks: {
    trailingSlash: false
  }
};
