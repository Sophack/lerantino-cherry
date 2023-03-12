const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// users can make multiple posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//define association of post belonging to user 
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//define association of comment belonging to user 
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//define association of comment belonging to post 
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

// define a user to have many comments with a foreign key (user) in the comment table
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// define post to have many comments with foreign key (post) in the comment table
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };