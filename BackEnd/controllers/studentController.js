




const Users = require('../models/User');


const getAllStudents = async (req,res)=>{

    const students = await Users.find({'roles.Student' : {$exists:true}}).exec();
    if(!students) return res.status(400).json({"message" : "No Student found"});
    console.log(students)
    res.status(200).json(students)
}



const getStudent = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Student ID is required"});

    const student = await Users.findOne({_id:req.params?.id}).exec();

    if(!student){

        return res.status(400).json({'message':`Student with id ${req.params.id} not found`})
    }

    res.status(200).json(student)
}



module.exports = {
    getStudent,
    getAllStudents,

}