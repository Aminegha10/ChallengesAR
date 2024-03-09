const Posts = require('../modules/postSchema')

const router = require('express').Router()


const getPosts = (req,res) =>{
Posts.find()
.then(post => res.json(post))
}

const addPost = (req, res) =>{
    const newPost = req.body;
    Posts.create(newPost)
    .then(post => res.json(post))
    .catch(err => res.status(400).send(err))
};

const updatePost = (req, res) =>{
    const title = req.params.title
    const uppPost = req.body
    Posts.findOneAndUpdate({title}, uppPost ,{new:true})
    .then(
        (post)=>{
            if(post){
                res.status(200).json(post)
            }else{
                throw new Error('Couldn\'t find post')}
                
        } )   
    .catch((error)=> res.status(404).json( error.message))
};


const deletePost = (req, res) =>{
    const title = req.body.title
    Posts.findOneAndDelete({title})
  .then((post)=>{
    if(post){
        res.status(200).json('post deleted successfully')
    }else{
        throw new Error('Couldn\'t find post')}
    }).catch((error)=>{
        res.status(404).json(error.message)
    });
}


module.exports = {getPosts , addPost , updatePost ,deletePost}
