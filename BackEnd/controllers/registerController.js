


// const usersDB = {
    
//     users : require('../models/users.json'),
//     setUsers : function (data){this.users = data}
// }

const User = require('../models/User')
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const {user, password} = req.body;

    if(!user || !password){
        return res.status(400).json({'message':'Username and password required'});

    }
    const duplicate = await User.findOne({username : user }).exec();
    if(duplicate) return res.sendStatus(409); //conflict

    try{
        //hash passsword
        const hashedPwd = await bcrypt.hash(password, 10);

         //create and store new user

        const result = await User.create({
            'username':user, 
            'password':hashedPwd
        });
       
        console.log(result);
        res.status(201).json({'success' :`new user ${user} created sucessfully`})
    }catch(err){

        res.status(500).json({'message': err.message})
    }
}


module.exports = {handleNewUser};



