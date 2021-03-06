// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata("settings", require("./gridsome.config").settings);
  });

  api.onCreateNode((options) => {
    if (
      options.internal.typeName === "BlogPost" &&
      process.env.NODE_ENV === "production" &&
      !options.published
    ) {
      // return null to filter it out
      return null;
    }

    return options;
  });
};
