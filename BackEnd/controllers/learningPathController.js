


const LearningPath = require('../models/LearningPath');
const learningPathService = require('../services/learningPathService')


const getAllLearningPaths = async (req,res)=>{

    const learningPaths = await LearningPath.find().populate('modules').exec();
    if(!learningPaths) return res.status(400).json({"message" : "No learnign Paths found"});

    res.status(200).json(learningPaths)
}

const createLearningPath = async (req, res)=>{
   
    const {name, description, imageUrl, language, framework} = req.body

    if(!name || !description){

        return res.status(400).json({'message':'name or description required'});
    }

    try{

        const learningPath = LearningPath.create({
            name:name,
            description : description,
            imageUrl : imageUrl,
            language : language,
            framework : framework
        });

        res.status(201).json({'message' : 'learning path  created successfully'});  //created

    }catch(err){

        console.error(err)
    }
    

    

}

const updateLearningPath = async (req, res)=>{
    
    if(!req?.body._id) return res.status(400).json({"message" : " Learning Path ID is required"});

    const response = learningPathService.updateLearningPath(req.body, res);

    return response;
}

const deleteLearningPath = async (req,res)=>{
   
    if(!req.params?.id) return res.status(400).json({"message" : " Learning Path ID is required"});

    const currentLearningPath = await LearningPath.findOne({_id :req.params?.id}).exec();
    
    if(!currentLearningPath){

        return res.status(204).json({'message':`learning Path with ID ${req.params?.id} not found`});

    }

    const result = await currentLearningPath.deleteOne({_id : req.params?.id});

    res.status(200).json(result);
}

const getLearningPath = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Learning Path ID is required"});

    const learningPath = await LearningPath.findOne({_id:req.params?.id}).populate('modules').exec();
    

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