const mongoose = require('mongoose');
const blogsSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    image: String
});

module.exports = mongoose.model('blog',blogsSchema);