
const LearningPath = require('../models/LearningPath');



const updateLearningPath = async (data, res) => {

    const currentLearningPath = await LearningPath.findOne({_id : data?._id}).exec();
    
   
    if(!currentLearningPath){

        return res.status(204).json({'message':`Learning Path not found`});

    }
    if(data?.name) currentLearningPath.name = data.name
    if(data?.description) currentLearningPath.description = data.description
    if(data?.imageUrl) currentLearningPath.imageUrl = data.imageUrl
    if(data?.language) currentLearningPath.language = data.language
    if(data?.framework) currentLearningPath.framework = data.framework

    if(data?.modules){

            currentLearningPath.modules =data?.modules
        
    }

    if(data?.module){

       if(!currentLearningPath.modules.some((md) => md.toString() === data.module._id )){

            currentLearningPath.modules.push(data?.module);

       }else{
        
        return res.status(409).json({'message' : 'module already exist on learning path'})
        
       }
    
}


   const result = await currentLearningPath.save();

  return {'message' : 'sucess', result};



}



module.exports = {
    updateLearningPath,
}