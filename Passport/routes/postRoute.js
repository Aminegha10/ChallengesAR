const { getPosts , addPost , updatePost , deletePost} = require('../controllers/postController')
const checkLogin = require('../middlewares/checkLogin');
const postRouter = require('express').Router()

postRouter.get('/', checkLogin,getPosts).post('/',checkLogin, addPost).patch('/:title', checkLogin, updatePost).delete('/',checkLogin, deletePost)

module.exports = postRouter