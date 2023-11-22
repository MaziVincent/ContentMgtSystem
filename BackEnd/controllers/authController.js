
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {

    const {email, password} = req.body;
    
    if(!email || !password){
        return res.status(400).json({'message':'Username and password required'});

    }
    
    const foundUser = await User.findOne({email:email}).exec();
    console.log(foundUser)
    if(!foundUser) return res.sendStatus(401) // unAuthorized

    //evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if(!match) return res.sendStatus(401) //UnAuthorized

    const roles = Object.values(foundUser.roles)
    //create jwt
    const accessToken = jwt.sign(
        {
            "UserInfo" : {
                "email" : foundUser.email,
                "roles" : roles
            }
        },
           
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'1d'}
        
    );

    const refreshToken = jwt.sign(
        {"email" : foundUser.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:'5d'}
    );
        // saving the refreshtoken
   foundUser.refreshToken = refreshToken;

   const result = await foundUser.save();
   console.log(result)

    res.cookie('refreshToken', refreshToken, {httpOnly:true, sameSite:'None',  maxAge: 24 * 60 * 60 * 1000 });
    
    res.json({accessToken})
}

module.exports = {handleLogin}