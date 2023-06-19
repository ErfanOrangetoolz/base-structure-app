const users = require("./json-server/users");

module.exports = () => ({
  users,
  comments: [{ id: 1, body: "some comment", postId: 1 }],
  profile: { name: "typicode" }
});
