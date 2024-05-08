


const Topic = require('../models/Topic');



const updateTopic = async (data, res) => {

    const currentTopic = await Topic.findOne({_id : data?._id}).exec();
    
   
    if(!currentTopic){

        return res.status(204).json({'message':`topic not found`});

    }
    if(data?.name) currentTopic.name = data.name
    if(data?.description) currentTopic.description = data.description
    

    if(data?.lessons){

            currentTopic.lessons = data?.lessons
        
    }

    if(data?.lesson){

       if(!currentTopic.lessons.some((ls) => ls._id.toString() === data.lesson._id )){

            currentTopic.lessons.push(data?.lesson);

       }else{

        return res.status(409).json({'message' : 'lesson already exist on topic'})
        
       }
    
}

if(data?.quiz){

    if(!currentTopic.quiz.some((qz) => qz._id.toString() === data.quiz._id )){

         currentTopic.quiz.push(data?.quiz);
    }else{
     return res.status(409).json({'message' : 'lesson already exist on topic'})
    }
 
}


   const result = await currentTopic.save();

  return {'message' : 'sucess', result};



}



module.exports = {
    updateTopic,
}