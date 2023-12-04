

const Module = require('../models/Module');


const getAllModules = async (req,res)=>{

    const modules = await Module.find();
    if(!modules) return res.status(400).json({"message" : "No Modules found"});

    res.status(200).json(modules)
}

const createModule = async (req, res)=>{
   
    const {name, description} = req.body

    if(!name || !description){

        return res.status(400).json({'message':'name or description required'});
    }

    try{

        const module = Module.create({
            name:name,
            description : description
        });

        res.status(201).json({'message' : 'module  created successfully', module});  //created

    }catch(err){

        console.error(err)
    }
    

    

}

const updateModule = async (req, res)=>{
    
    if(!req?.body._id) return res.status(400).json({"message" : " Module ID is required"});

    const currentModule = await Module.findOne({_id : req.body?._id}).exec();
    
   
    if(!currentModule){

        return res.status(204).json({'message':`Module not found`});

    }
    if(req.body?.name) currentModule.name = req.body.name
    if(req.body?.description) currentModule.description = req.body.description

    if(req.body?.topic){
        if(!currentModule.topics.some(topic => topic._id === req.body?.topic._id)){

            currentModule.topics.push(req.body.module);
        }
    }

   const result = await currentModule.save();

   res.status(200).json({"message" : " Module Updated Successfully", result})

}

const deleteModule = async (req,res)=>{
   
    if(!req.params?.id) return res.status(400).json({"message" : " Module ID is required"});

    const currentModule = await Module.findOne({_id :req.params?.id}).exec();
    
    if(!currentModule){

        return res.status(204).json({'message':`Module with ID ${req.params?.id} not found`});

    }

    const result = await currentModule.deleteOne({_id : req.params?.id});

    res.status(200).json(result);
}

const getModule = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Module ID is required"});

    const module = await Module.findOne({_id:req.params?.id}).exec();

    if(!module){

        return res.status(400).json({'message':`Module with id ${req.params.id} not found`});
    }

    res.status(200).json(module);
}



module.exports = {
    getModule,
    getAllModules,
    createModule,
    updateModule,
    deleteModule

}