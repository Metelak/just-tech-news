const User = require("./User");
const Post = require("./Post");

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

module.exports = { User, Post };