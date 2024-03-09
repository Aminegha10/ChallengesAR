
const Users = require('../modules/userSchema');
const bcrypt = require('bcrypt');



const register = (req, res) => {
    const newUser = req.body;
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hashedPassword;
    Users.create(newUser)
    .then((user)=> {
      if(user){
        res.status(200).json(user);
      }else{
        throw new Error('User already exists');
      }

    }).catch((Error) => {res.status(400).send("user already exists")});
    
    
  };
/*
  const  login = async (req, res) => {
    const {email, password} = req.body;
    Users.findOne({email})
    .then((user) => {
      if(user){
        const validPassword = bcrypt.compareSync(password, user.password);
        if(validPassword){
          res.status(200).send(`Welcome ${user.username}`);
        }else{
          res.status(400).json({message: 'Invalid password'});
        }
      }else{
        res.status(400).json({message: 'Invalid email'});
      }
    })
  }*/

  const login = (req , res) => {
    try{
      console.log('logg in')
      res.status(200).send(`Welcome ${req.user.username}`)
    }catch(Error){
      res.status(400).send(Error.message)
    }
   
}

  module.exports = {register , login};