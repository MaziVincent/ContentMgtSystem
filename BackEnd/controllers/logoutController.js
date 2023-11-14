



const User = require('../models/User')

const jwt = require('jsonwebtoken');




const handleLogout = async (req, res) => {

   const cookies = req.cookies;

    if(!cookies.refreshToken){
        return res.sendStatus(204);
    }
    
    const refreshToken = cookies.refreshToken

    const foundUser = await User.findOne({refreshToken}).exec();
    if(!foundUser){

        res.clearCookie('refreshToken', {httpOnly:true, sameSite:'None'});
        return res.sendStatus(204) // no content
    } 

    //delete refresh token
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    
    console.log(result);
    

    res.clearCookie('refreshToken', {httpOnly:true, sameSite:'None'});
    res.sendStatus(204);

}

module.exports = {handleLogout}