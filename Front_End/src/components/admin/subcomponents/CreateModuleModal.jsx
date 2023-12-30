import usePost from "../../../hooks/usePost";
import useAuth from "../../../hooks/useAuth";
import baseUrl from "../../../shared/baseUrl";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useFetch from "../../../hooks/useFetch";
import useUpdate from "../../../hooks/useUpdate";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";

const CreateModuleModal = ({ open, handleClose }) => {
  const [learningPaths, setLearningPaths] = useState();
  const post = usePost();
  const update = useUpdate();
  const { auth } = useAuth();
  const fetch = useFetch();
  const url = `${baseUrl}module`;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const getLearningPaths = async () => {

    const result = await fetch(`${baseUrl}learningPath`, auth.accessToken);

   setLearningPaths(result.data);
    
  };
 
  if(open){

    getLearningPaths()
   

  }
  

  const createModule = async (data) => {
      const response = await post(url, data, auth?.accessToken);
      // const lp = {_id :data.learningPath, module:response.data.module} 
      // const result = await update(`${baseUrl}learningPath`, lp, auth?.accessToken)

  };

  const {mutate} = useMutation(createModule,{

    onSuccess: ()=>{
      queryClient.invalidateQueries('modules')
    }
  })

  const handleModuleCreate = (module) => {

    mutate(module)

    handleClose();
    toast.success('Module Created Successfully');

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
        className=" overflow-y-auto overflow-x-hidden absolute top-1/4   right-1/4 z-50 justify-center items-center w-2/4  h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create Module
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
            <form onSubmit={handleSubmit(handleModuleCreate)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type learning path name"
                    required=""
                  />
                  {errors.name && (
                    <p className="text-sm text-red-400">
                      Name is required
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Learning Path
                  </label>
                  <select
                    id="category"
                    {...register("learningPath", { required: 'Learning Path is required' })}
                    defaultValue={'default'}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option
                      disabled
                      value='default'
                    >
                      Select Learning Path
                    </option>{
                        learningPaths?.map((lp)=>(
                            <option key={lp._id} value={lp._id}> {`${lp.name}(${lp.framework})`}</option>
                        ))
                    }
                  </select>

                  {errors.learningPath && (
                    <p className="text-sm text-red-400">
                      {" "}
                      {errors.learningPath?.message}{" "}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    {...register("description", { required: true })}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write learning path description here"
                  ></textarea>
                  {errors.description && (
                    <p className="text-sm text-red-400">
                      Description is required 
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
                Create New Module
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModuleModal;
