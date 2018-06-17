const hackerNewsAPI = require("./hackernewsAPI");

const resolvers = {
  Query: {
    stories: (_, vars) => hackerNewsAPI.getStories(vars),
    items: (_, vars, ctx, args) => hackerNewsAPI.getItems(vars),
    user: (_, vars) => hackerNewsAPI.getUser(vars)
  },
  Item: {
    kidsItems: (item, vars) =>
      item && item.kids ? hackerNewsAPI.getItems({ ids: item.kids }) : []
  }
};

module.exports = resolvers;
