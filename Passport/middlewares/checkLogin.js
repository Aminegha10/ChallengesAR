

const checkLogin = (req, res, next) =>{
    if(req.user){
        return next()
    }
    res.send('you are not logged in')
}

module.exports = checkLogin 