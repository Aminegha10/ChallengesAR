exports.checkAuth=(req, res, next)=>{
  if (req.session.user){
    res.send("you are in the protected area");
    }
else{
  next();
}
};
