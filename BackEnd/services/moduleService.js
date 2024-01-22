

const Module = require('../models/Module');



const updateModule = async (data, res) => {

    const currentModule = await Module.findOne({_id : data?._id}).exec();
    
   
    if(!currentModule){

        return res.status(204).json({'message':`module not found`});

    }
    if(data?.name) currentModule.name = data.name
    if(data?.description) currentModule.description = data.description
    

    if(data?.topics){

            currentModule.topics = data?.topics
        
    }

    if(data?.topic){

       if(!currentModule.topics.some((md) => md.toString() === data.topic._id )){

            currentModule.topics.push(data?.topic);
       }else{
        return res.status(409).json({'message' : 'topic already exist on module'})
       }
    
}


   const result = await currentModule.save();

  return {'message' : 'sucess', result};



}



module.exports = {
    updateModule,
}