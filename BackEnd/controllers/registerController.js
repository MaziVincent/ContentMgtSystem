



const User = require('../models/User')
const bcrypt = require('bcrypt');

const handleNewStudent = async (req, res) => {
    const {firstname, lastname, email, password} = req.body;

    if(!email || !password || !firstname || !lastname ){
        return res.status(400).json({'message':'Username and password and full name required'});

    }
    const duplicate = await User.findOne({email : email }).exec();
    if(duplicate) return res.sendStatus(409); //conflict

    try{
        //hash passsword
        const hashedPwd = await bcrypt.hash(password, 10);

         //create and store new user

        const result = await User.create({
            
            'firstname':firstname,
            'lastname':lastname,
            'email':email, 
            'password':hashedPwd,
            'roles': {User:'User', Student:'Student'}
        });
       
        console.log(result);
        res.status(201).json({'success' :`new User created sucessfully`})
    }catch(err){

        res.status(500).json({'message': err.message})
    }
}

const handleNewAdmin = async (req, res) => {
    const {firstname, lastname, email, password} = req.body;

    if(!email || !password || !firstname || !lastname ){
        return res.status(400).json({'message':'Username and password and full name required'});

    }
    const duplicate = await User.findOne({email : email }).exec();
    if(duplicate) return res.sendStatus(409); //conflict

    try{
        //hash passsword
        const hashedPwd = await bcrypt.hash(password, 10);

         //create and store new user

        const result = await User.create({
            
            'firstname':firstname,
            'lastname':lastname,
            'email':email, 
            'password':hashedPwd,
            'roles': {User:'User', Admin:'Admin'},
            searchString:`${firstname}${lastname}${email}`
        });
       
        console.log(result);
        res.status(201).json({'success' :`new User created sucessfully`})
    }catch(err){

        res.status(500).json({'message': err.message})
    }
}


module.exports = {handleNewStudent, handleNewAdmin};



