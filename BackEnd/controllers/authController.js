
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {

    const {user, password} = req.body;

    if(!user || !password){
        return res.status(400).json({'message':'Username and password required'});

    }

    const foundUser = await User.findOne({username:user}).exec();
    if(!foundUser) return res.sendStatus(401) // unAuthorized

    //evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if(!match) return res.sendStatus(401) //UnAuthorized

    const roles = Object.values(foundUser.roles)
    //create jwt
    const accessToken = jwt.sign(
        {
            "UserInfo" : {
                "username" : foundUser.username,
                "roles" : roles
            }
        },
           
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'60s'}
        
    );

    const refreshToken = jwt.sign(
        {"username" : foundUser.username},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:'1d'}
    );
        // saving the refreshtoken
   foundUser.refreshToken = refreshToken;

   const result = await foundUser.save();
   console.log(result)

    res.cookie('refreshToken', refreshToken, {httpOnly:true, sameSite:'None', secure:true, maxAge: 24 * 60 * 60 * 1000 });
    
    res.json({accessToken})
}

module.exports = {handleLogin}