

const Employee = require('../models/Employee');


const getAllEmployees = async (req,res)=>{

    const employees = await Employee.find();
    if(!employees) return res.status(400).json({"message" : "No employee found"});

    res.status(200).json(employees)
}

const createNewEmployee = async (req, res)=>{
   
    const {firstname, lastname} = req.body

    if(!firstname || !lastname){

        return res.status(400).json({'message':'first or lastname required'});
    }

    try{

        const employee = Employee.create({
            firstname:firstname,
            lastname : lastname
        });

        res.status(201).json({'message' : 'employee created'});  //created

    }catch(err){

        console.log(err)
    }
    

    

}

const updateEmployee = async (req, res)=>{
    
    if(!req?.body.id) return res.status(400).json({"message" : " Employee ID is required"});

    const currentEmployee = await Employee.findOne({_id : req.body.id}).exec();
    
   
    if(!currentEmployee){

        return res.status(204).json({'message':`Employee ID ${req.body.id} not found`});

    }
    if(req.body?.firstname) currentEmployee.firstname = req.body.firstname
    if(req.body?.lastname) currentEmployee.lastname = req.body.lastname

   const result = await currentEmployee.save();

   res.status(200).json({"message" : " Employee Updated Successfully",result})

}

const deleteEmployee = async (req,res)=>{
   
    if(!req.body?.id) return res.status(400).json({"message" : " Employee ID is required"});

    const currentEmployee = await Employee.findOne({_id :req.body.id}).exec();
    
    if(!currentEmployee){

        return res.status(204).json({'message':`employee with ID ${req.body.id} not found`});

    }

    const result = await currentEmployee.deleteOne({_id : req.body.id});

    res.status(200).json(result);
}

const getEmployee = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Employee ID is required"});

    const employee = await Employee.findOne({_id:req.params?.id}).exec();

    if(!employee){

        return res.status(400).json({'message':`Employeed with id ${req.params.id} not found`})
    }

    res.status(200).json(employee)
}



module.exports = {
    getEmployee,
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee

}