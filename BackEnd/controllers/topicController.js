

const Topic = require('../models/Topic');


const getAllTopics = async (req,res)=>{

    const Topics = await Topic.find();
    if(!Topics) return res.status(400).json({"message" : "No Topics found"});

    res.status(200).json(Topics)
}

const createTopic = async (req, res)=>{
   
    const {name, description} = req.body

    if(!name || !description){

        return res.status(400).json({'message':'name or description required'});
    }

    try{

        const topic = Topic.create({
            name:name,
            description : description
        });

        res.status(201).json({'message' : 'Topic  created successfully'});  //created

    }catch(err){

        console.error(err)
    }
    

    

}

const updateTopic = async (req, res)=>{
    
    if(!req?.body._id) return res.status(400).json({"message" : " Topic ID is required"});

    const currentTopic = await Topic.findOne({_id : req.body?._id}).exec();
    
   
    if(!currentTopic){

        return res.status(204).json({'message':`Topic not found`});

    }
    if(req.body?.name) currentTopic.name = req.body.name
    if(req.body?.description) currentTopic.description = req.body.description

    if(req.body?.lesson){
        if(!currentTopic.lessons.some(lesson => lesson._id === req.body?.lesson._id)){

            currentTopic.topics.push(req.body.lesson);
        }
    }

   const result = await currentTopic.save();

   res.status(200).json({"message" : " Module Updated Successfully", result})

}

const deleteTopic = async (req,res)=>{
   
    if(!req.body?._id) return res.status(400).json({"message" : " Module ID is required"});

    const currentTopic = await Topic.findOne({_id :req.body._id}).exec();
    
    if(!currentTopic){

        return res.status(204).json({'message':`Module with ID ${req.body._id} not found`});

    }

    const result = await currentTopic.deleteOne({_id : req.body._id});

    res.status(200).json(result);
}

const getTopic = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Module ID is required"});

    const topic = await Topic.findOne({_id:req.params?.id}).exec();

    if(!topic){

        return res.status(400).json({'message':`Module with id ${req.params.id} not found`});
    }

    res.status(200).json(topic);
}



module.exports = {
    getTopic,
    getAllTopics,
    createTopic,
    updateTopic,
    deleteTopic

}