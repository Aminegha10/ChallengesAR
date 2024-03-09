const passport = require('passport')
const Strategy = require('passport-local');
const Users = require('../modules/userSchema');
const bcrypt = require('bcrypt');
const { Error } = require('mongoose');

passport.serializeUser((user, done) => {
 
    console.log('serialized user');
    console.log(user);
    done(null, user.id);
 

});
passport.deserializeUser(async (id, done) => {
    console.log('deserialized user');
    console.log(id);

    try {
        const user = await Users.findById(id);
        if(!user) throw new Error('User not found')
        console.log(user);
        done(null, user);
        
    } catch (error) { console.log(error); done(error,null); }



})



passport.use(new Strategy({
    usernameField:'email'  }, 
    async (email , password , done) => {
    //console.log(email)
    //console.log(password)
    try {
    if(!email && !password){
        console.log('Please enter email and password')
        return done(null, false, { message: 'Please enter email and password'});
    }
    await Users.findOne({email})
    .then((user) => {

      if(!user){
        console.log('User not found');
        return done(null, false)};
      
      const validPassword = bcrypt.compareSync(password, user.password);
      if(validPassword){
          console.log('login successful');
          return done(null, user);
        }else{
           console.log('invalid password'); 
          return done(null, false);
        }
    })
    }catch(Error){
      return done(Error);
    }

}))