

import usePost from "../../../hooks/usePost";
import useAuth from "../../../hooks/useAuth";
import baseUrl from "../../../shared/baseUrl";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useUpdate from "../../../hooks/useUpdate";
import { useQuery, useMutation, useQueryClient } from "react-query";


const CreateQuizModal = ({ open, handleClose, topicId }) => {
  const post = usePost();
  const update = useUpdate();
  const { auth } = useAuth();
  const url = `${baseUrl}quiz`;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  
  

  const createLesson = async (quiz) => {
      const data = {...quiz, topicId}
      const response = await post(url, data, auth?.accessToken);
      
      console.log(response.data)

  };

  const {mutate} = useMutation(createLesson,{

    onSuccess: ()=>{
      queryClient.invalidateQueries('topic')
    }
  })

  const handleLessonCreate = (quiz) => {

    mutate(quiz)

    handleClose();
    toast.success('Quiz Created Successfully');

  }

 // console.log(data)
  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        className=" overflow-y-auto overflow-x-hidden absolute top-3/6   right-1/4 z-50 justify-center items-center w-2/4  h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create Quiz
              </h3>
              <button
                type="button"
                onClick={() => {
                  handleClose();
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleSubmit(handleLessonCreate)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                  <label
                    htmlFor="question"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Question
                  </label>
                  <textarea
                    id="question"
                    rows="4"
                    {...register("question", { required: true })}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write question here"
                  ></textarea>
                  {errors.question && (
                    <p className="text-sm text-red-400">
                      question is required 
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="optionA"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    option A
                  </label>
                  <input
                    type="text"
                    name="optionA"
                    id="optionA"
                    {...register("optionA",{required:true})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type optionA"
                    required=""
                  />
                  {errors.optionA && (
                    <p className="text-sm text-red-400">
                      optionA is required
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="optionB"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    option B
                  </label>
                  <input
                    type="text"
                    name="optionB"
                    id="optionB"
                    {...register("optionB",{required:true})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type optionB"
                    required=""
                  />
                  {errors.optionB && (
                    <p className="text-sm text-red-400">
                      optionB is required
                    </p>
                  )}
                </div>


                <div>
                  <label
                    htmlFor="optionC"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    option C
                  </label>
                  <input
                    type="text"
                    name="optionC"
                    id="optionC"
                    {...register("optionC",{required:true})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type optionC"
                    required=""
                  />
                  {errors.optionC && (
                    <p className="text-sm text-red-400">
                      optionC is required
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="optionD"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    option D
                  </label>
                  <input
                    type="text"
                    name="optionD"
                    id="optionD"
                    {...register("optionD",{required:true})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type optionB"
                    required=""
                  />

                  {errors.optionD && (
                    <p className="text-sm text-red-400">
                      optionD is required
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="answer"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    name="answer"
                    id="answer"
                    {...register("answer",{required:true})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type answer"
                    required=""
                  />
                  {errors.answer && (
                    <p className="text-sm text-red-400">
                      answer is required
                    </p>
                  )}
                </div>

                

               </div>
              <button
                type="submit"
                className="text-gray-600 inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Create Quiz
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateQuizModal;
