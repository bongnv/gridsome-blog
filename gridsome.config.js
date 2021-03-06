// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const octiconIcon = require("./src/utils/octicon-icon");

module.exports = {
  siteName: "@bongnv",
  siteDescription: "The blog of Bong.",
  siteUrl: "https://bongnv.com",

  settings: {
    author: "Bong Nguyen",
    links: {
      linkedin: "https://linkedin.com/in/bongnv",
      github: "https://github.com/bongnv",
      source: "https://github.com/bongnv/gridsome-blog",
      email: "mailto:vanbong@gmail.com",
    },
  },

  templates: {
    Tag: "/tag/:id",
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "*.md",
        typeName: "BlogPage",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
        },
      },
    },

    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "blog/**/*.md",
        typeName: "BlogPost",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: [
            ["@gridsome/remark-prismjs", { transformInlineCode: true }],
          ],
          autolinkHeadings: {
            behavior: "append",
            content: octiconIcon,
          },
        },
      },
    },

    "gridsome-plugin-tailwindcss",

    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },

    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-11696168-2",
      },
    },
  ],
};
