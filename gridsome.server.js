// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // Skills
    const skills = addCollection("Skill");
    const skillsResponse = await axios.get("http://localhost:1337/skills");
    const skillsData = skillsResponse.data;

    for (const skill of skillsData) {
      skills.addNode(skill);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
