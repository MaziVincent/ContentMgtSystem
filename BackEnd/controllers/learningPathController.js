


const LearningPath = require('../models/LearningPath');


const getAllLearningPaths = async (req,res)=>{

    const learningPaths = await LearningPath.find();
    if(!learningPaths) return res.status(400).json({"message" : "No learnign Paths found"});

    res.status(200).json(learningPaths)
}

const createLearningPath = async (req, res)=>{
   
    const {name, description, imageUrl} = req.body

    if(!name || !description){

        return res.status(400).json({'message':'name or description required'});
    }

    try{

        const learningPath = LearningPath.create({
            name:name,
            description : description,
            imageUrl : imageUrl
        });

        res.status(201).json({'message' : 'learning path  created successfully'});  //created

    }catch(err){

        console.error(err)
    }
    

    

}

const updateLearningPath = async (req, res)=>{
    
    if(!req?.body._id) return res.status(400).json({"message" : " Learning Path ID is required"});

    const currentLearningPath = await LearningPath.findOne({_id : req.body?._id}).exec();
    
   
    if(!currentLearningPath){

        return res.status(204).json({'message':`Learning Path not found`});

    }
    if(req.body?.name) currentLearningPath.name = req.body.name
    if(req.body?.description) currentLearningPath.description = req.body.description
    if(req.body?.imageUrl) currentLearningPath.imageUrl = req.body.imageUrl

    if(req.body?.module){
        if(!currentLearningPath.modules.some(mod => mod._id === req.body?.module._id)){

            currentLearningPath.modules.push(req.body.module);
        }
    }

   const result = await currentLearningPath.save();

   res.status(200).json({"message" : " Learning Path Updated Successfully", result})

}

const deleteLearningPath = async (req,res)=>{
   
    if(!req.body?._id) return res.status(400).json({"message" : " Learning Path ID is required"});

    const currentLearningPath = await LearningPath.findOne({_id :req.body._id}).exec();
    
    if(!currentLearningPath){

        return res.status(204).json({'message':`learning Path with ID ${req.body._id} not found`});

    }

    const result = await currentLearningPath.deleteOne({_id : req.body._id});

    res.status(200).json(result);
}

const getLearningPath = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Learning Path ID is required"});

    const learningPath = await LearningPath.findOne({_id:req.params?.id}).exec();

    if(!learningPath){

        return res.status(400).json({'message':`Learning Path with id ${req.params.id} not found`});
    }

    res.status(200).json(learningPath);
}



module.exports = {
    getLearningPath,
    getAllLearningPaths,
    createLearningPath,
    updateLearningPath,
    deleteLearningPath

}