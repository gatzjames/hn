const firebase = require("firebase");
const hackernews = require("firebase-hackernews");

const hackerNewsService = hackernews.init(firebase);

const getStories = ({ type, page, count }) =>
  hackerNewsService.stories(type, { page, count });

const getItems = ({ ids }) => hackerNewsService.items(ids);

const getUser = ({ id }) => hackerNewsService.user(id);

module.exports = {
  getStories,
  getItems,
  getUser
};
