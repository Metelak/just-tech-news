const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');

// create associations
// This association creates the reference for the id column in the User model to link to the corresponding foreign key pair, which is the user_id in the Post model.
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// reverse association
// This association defines the relationship of the Post model to the User, declare the link to the foreign key, which is designated at user_id in the Post model
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// This association allows both the User and Post models to query each other's information in the context of a vote
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };