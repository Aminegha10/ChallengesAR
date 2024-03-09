const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    paragraph: {
        type: Object,
        required: true
    },
    tags:{
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Posts = mongoose.model('Posts', postSchema);






module.exports = Posts;