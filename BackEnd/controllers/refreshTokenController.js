


const User = require('../models/User')

const jwt = require('jsonwebtoken');


const handleRefreshToken = async (req, res) => {

   const cookies = req.cookies;

    if(!cookies.refreshToken){
        return res.sendStatus(401);
    }
    //console.log(cookies.refreshToken)
    const refreshToken = cookies.refreshToken

    const foundUser = await User.findOne({refreshToken}).exec();
    if(!foundUser) return res.sendStatus(403) // forbidden

    //evaluate jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles)
            //create new access token
            const accessToken = jwt.sign(
                {
                    "UserInfo" : {
                        "email" : foundUser.email,
                        "roles" : roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'60s'}
            );
            res.json({accessToken, user:foundUser, roles })
        }
    );
}

module.exports = {handleRefreshToken}