

const Lesson = require('../models/Lesson');


const getAllLessons = async (req,res)=>{

    const lessons = await Lesson.find();
    if(!lessons) return res.status(400).json({"message" : "No Lessons found"});

    res.status(200).json(lessons)
}

const createLesson = async (req, res)=>{
   
    const {title, subTitle, body, index} = req.body

    if(!title || !body || !index){

        return res.status(400).json({'message':'name or description or index required'});
    }

    try{

        const lesson = Lesson.create({
            title:title,
            subTitle : subTitle,
            body : body,
            index : index

        });

        res.status(201).json({'message' : 'Lesson  created successfully'});  //created

    }catch(err){

        console.error(err)
    }
    

    

}

const updateLesson = async (req, res)=>{
    
    if(!req?.body._id) return res.status(400).json({"message" : " Lesson ID is required"});

    const currentLesson = await Lesson.findOne({_id : req.body?._id}).exec();
    
   
    if(!currentLesson){

        return res.status(204).json({'message':`Lesson not found`});

    }
    if(req.body?.title) currentLesson.title = req.body.title
    if(req.body?.subTitle) currentLesson.subTitle = req.body.subTitle
    if(req.body?.body) currentLesson.body = req.body.body
    if(req.body?.index) currentLesson.index = req.body.index


   const result = await currentLesson.save();

   res.status(200).json({"message" : " Module Updated Successfully", result})

}

const deleteLesson = async (req,res)=>{
   
    if(!req.body?._id) return res.status(400).json({"message" : " Module ID is required"});

    const currentLesson = await Lesson.findOne({_id :req.body._id}).exec();
    
    if(!currentLesson){

        return res.status(204).json({'message':`Module with ID ${req.body._id} not found`});

    }

    const result = await currentLesson.deleteOne({_id : req.body._id});

    res.status(200).json(result);
}

const getLesson = async (req,res)=>{

    if(!req.params?.id) return res.status(400).json({"message" : " Module ID is required"});

    const lesson = await Lesson.findOne({_id:req.params?.id}).exec();

    if(!lesson){

        return res.status(400).json({'message':`Module with id ${req.params.id} not found`});
    }

    res.status(200).json(lesson);
}



module.exports = {
    getLesson,
    getAllLessons,
    createLesson,
    updateLesson,
    deleteLesson

}