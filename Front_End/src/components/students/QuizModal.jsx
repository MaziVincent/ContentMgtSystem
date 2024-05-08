


import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";

const QuizModal = ({ isOpen, onClose, assessments }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0); // track current question index
  const [userAnswer, setUserAnswer] = useState("");
  const [userScore, setUserScore] = useState(0); // store user answers for each question
/*
  useEffect(() => {
    if (isOpen) {
      // reset on modal open
      setCurrentQuestion(0);
      setUserAnswer("");
    }
  }, [isOpen]);

 // const handleAnswerChange = (questionId, answer) => {
  //  setUserAnswers({ ...userAnswers, [questionId]: answer });
 // };

 const handleScore = ( answer ) => {

  if(userAnswer == answer){

    setUserScore(prev => prev + 1);
  }
  
setUserAnswer("")
 }

  const handleSubmitQuiz =  () => {
    

    handleCloseModal(); // close modal after submitting
  };

  

  if (!isOpen) return null;

 // access current question based on index
  
  */
 const currentAssessment = assessments? assessments[currentQuestion] : {};
  const handleCloseModal = () => {
    onClose(); // close modal callback
  };


  return (
    <Modal
    open={isOpen}
    onClose={() => {
      handleCloseModal();
    }}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
     <div
        id="defaultModal"
        className=" p-5 overflow-y-auto overflow-x-hidden absolute top-1/4 bg-gray-300  right-1/4 z-50 justify-center items-center w-2/4  h-auto "
      >
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-bold text-xl"> Attempt all Questions </h2>
        <p className="text-gray-800 font-bold">{currentAssessment?.question }</p>
       
          <label >
            <input
              type="radio"
              name="question"
              value={currentAssessment?.optionA}
              onChange={(e)=>{setUserAnswer(e.target.value)}}
             // onChange={(e) => handleAnswerChange(currentAssessment.id, e.target.value)}
            />
           &nbsp; {currentAssessment?.optionA}
          </label>

          <label >
            <input
              type="radio"
              name="question"
              value={currentAssessment?.optionB}
              onChange={(e)=>{setUserAnswer(e.target.value)}}
             // onChange={(e) => handleAnswerChange(currentAssessment.id, e.target.value)}
            />
           &nbsp; {currentAssessment?.optionB}
          </label>

          <label >
            <input
              type="radio"
              name="question"
              value={currentAssessment?.optionC}
              onChange={(e)=>{setUserAnswer(e.target.value)}}
             // onChange={(e) => handleAnswerChange(currentAssessment.id, e.target.value)}
            />
           &nbsp; {currentAssessment?.optionC}
          </label>

          <label >
            <input
              type="radio"
              name="question"
              value={currentAssessment?.optionD}
              onChange={(e)=>{setUserAnswer(e.target.value)}}
             // onChange={(e) => handleAnswerChange(currentAssessment.id, e.target.value)}
            />
           &nbsp; {currentAssessment?.optionD}
          </label>
        
        {currentQuestion < assessments?.length - 1 ? (
          <button onClick={() => { console.log(userAnswer)  /*handleScore(currentAssessment.answer); setCurrentQuestion(currentQuestion + 1) */}}>Next Question</button>
        ) : (
          <button>Submit Quiz</button>
        )}
        <button onClick={()=>{handleCloseModal}}>Close</button>
      </div>
      </div>
    </Modal>
  );
};

export default QuizModal;
