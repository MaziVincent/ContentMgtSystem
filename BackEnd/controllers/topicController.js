

const Topic = require('../models/Topic');
const {updateModule } = require('../services/moduleService')


const getAllTopics = async (req,res)=>{

    const Topics = await Topic.find();
    if(!Topics) return res.status(400).json({"message" : "No Topics found"});

    res.status(200).json(Topics)
}

const createTopic = async (req, res)=>{
   
    const {name, description, index, module } = req.body

    if(!name || !description || !index ){

        return res.status(400).json({'message':'name or description or index required'});
    }

    try{

        const topic = await Topic.create({
            name:name,
            description : description,
            index: index
        });

        const data = {topic, _id:module}
        const response = await updateModule(data, res );
        console.log(response)

        res.status(201).json({'message' : 'Topic  created successfully', topic});  //created

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
    if(req.body?.index) currentTopic.index = req.body.index

    if(req.body?.lesson){
        if(!currentTopic.lessons.some(lesson => lesson._id === req.body?.lesson._id)){

            currentTopic.lessons.push(req.body.lesson);
        }
    }

   const result = await currentTopic.save();

   res.status(200).json({"message" : " Module Updated Successfully", result})

}

const deleteTopic = async (req,res)=>{
   
    if(!req.params?.id) return res.status(400).json({"message" : " Module ID is required"});

    const currentTopic = await Topic.findOne({_id :req.params?.id}).exec();
    
    if(!currentTopic){

        return res.status(204).json({'message':`Module with ID ${req.params?.id} not found`});

    }

    const result = await currentTopic.deleteOne({_id : req.params?.id});

    res.status(200).json(result);
}

const getTopic = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Module ID is required"});

    const topic = await Topic.findOne({_id:req.params?.id}).populate('lessons').exec();
    

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