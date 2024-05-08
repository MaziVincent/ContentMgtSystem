


const Quiz = require('../models/Quiz');
const {updateTopic } = require('../services/topicService')


const getAllQuiz = async (req,res)=>{

    const allQuiz = await Quiz.find();
    if(!allQuiz) return res.status(400).json({"message" : "No Topics found"});

    res.status(200).json(allQuiz)
}

const createQuiz = async (req, res)=>{
   
    const {question, optionA, optionB, optionC, optionD, answer, topicId } = req.body

    if(!question || !optionA || !optionB || !optionC || !optionD || !answer){

        return res.status(400).json({'message':'question or options  required'});
    }

    try{

        const quiz = await Quiz.create({
            question:question,
            optionA:optionA,
            optionB:optionB,
            optionC:optionC,
            optionD:optionD,
            answer:answer,
            topicId:topicId
        });

        const data = {quiz, _id:topicId}
        const response = await updateTopic(data, res );
        console.log(response)

        res.status(201).json({'message' : 'quiz  created successfully', quiz});  //created

    }catch(err){

        console.error(err)
    }
    

    

}








module.exports = {
    
    getAllQuiz,
    createQuiz

}