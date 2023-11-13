



const User = require('../models/User')

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;

const path = require('path');


const handleLogout = async (req, res) => {

   const cookies = req.cookies;

    if(!cookies.refreshToken){
        return res.sendStatus(204);
    }
    
    const refreshToken = cookies.refreshToken

    const foundUser = await User.findOne({refreshToken}).exec();
    if(!foundUser){

        res.clearCookie('refreshToken', {httpOnly:true, sameSite:'None', secure:true});
        return res.sendStatus(204) // no content
    } 

    //delete refresh token
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    
    console.log(result);
    

    res.clearCookie('refreshToken', {httpOnly:true, sameSite:'None', secure:true});
    res.sendStatus(204);

}

module.exports = {handleLogout}