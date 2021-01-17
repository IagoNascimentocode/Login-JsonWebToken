const jwt = require('jsonwebtoken');


module.exports = function (req,res,next){
    const token = req.header("autorization-token")
    if(!token) return res.status(401).send("Access Denied")

    try{
        const userVerifield = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user = userVerifield
        next()
    }catch(error) {
        res.status(401).send("access Denied");

    }

}