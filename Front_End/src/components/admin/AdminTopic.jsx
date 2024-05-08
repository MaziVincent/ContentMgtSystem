


import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import { green, purple } from "@mui/material/colors";
import useFetch from "../../hooks/useFetch";
import { useState , useEffect} from "react";
import { useQuery, useQueryClient } from "react-query";
import useAuth from "../../hooks/useAuth";
import baseUrl from "../../shared/baseUrl";
import axios from "axios";
import DeleteDialogue from "./subcomponents/DeleteDialogue";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import Alert from '@mui/material/Alert';
import CreateTopicModal from "./subcomponents/CreateTopicModal";
import { useNavigate } from "react-router-dom";
import UpdateTopicModal from "./subcomponents/UpdateTopicModal";

const AdminTopic = () => {
  const fetch = useFetch();
  const { auth } = useAuth();
  const url = `${baseUrl}topic`;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
 // const [data, setDate] = useState();
 

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);
  const [deleteId, setDeleteId] = useState("");

  
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleUpdateOpen = () => setOpenUpdate(true);
  const handleUpdateClose = () => setOpenUpdate(false);
  const [topicId, setTopicId] = useState("")

  const getTopics = async () => {
    const result = await fetch(url, auth.accessToken);

    return result.data;
  };

 

    const { data, isError, isLoading, isSuccess } = useQuery(
        ["topics"],
        getTopics,
        { keepPreviousData: true, 
            staleTime: 10000,
        refetchOnMount:"always" }
      );

 
  const handleDelete = async (_id) => {

    try{
        const result = await axios.delete(`${url}/${_id}`,{
            headers: {
                Authorization: `Bearer ${auth.accessToken}`,
              },
        })

        toast.success('Topic Deleted Successfully')
        queryClient.invalidateQueries('topics')

    }catch(err){
        console.log(err)
    }
   // console.log('Deleted' + _id)
  }
 

  return (
    <>
      <div className="w-full">
        <ToastContainer />
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-4 ">
          <div className="shadow-lg p-4   rounded-lg border-gray-300 dark:border-gray-100 h-32 md:h-64 ">
            <div className="flex justify-between md:flex-col md:justify-center gap-6 items-center w-full border-b-2 pb-4">
              <span>
                {" "}
                <TopicOutlinedIcon
                  sx={{ color: purple[700] }}
                  fontSize="large"
                />{" "}
              </span>
              <h3 className="text-center text-xl  font-bold dark:text-gray-100 ">
                {" "}
                {data?.length || 0}
              </h3>
            </div>

            <h3 className="text-xl text-center font-bold dark:text-gray-100">
              {" "}
              Topics {" "}
            </h3>
          </div>
          
        </div>

        <div>
        
          <button
            type="button"
            onClick={handleOpen}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Topic
          </button>

          
        </div>

        <CreateTopicModal open={open} handleClose={handleClose} />
       <DeleteDialogue open={openDeleteModal} handleClose={handleCloseDeleteModal} deleteId={deleteId} handleDelete={handleDelete} />
        <UpdateTopicModal openUpdate={openUpdate} handleUpdateClose={handleUpdateClose} topicId={topicId} />


        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-auto mb-4">
            {
                isError && (<p> <Alert severity="error"> An Error Occured while fetching </Alert>  </p>)
            }

            {
                isLoading && (<p className="flex justify-center items-center"> <CircularProgress /> </p>)
            }

            {
                isSuccess && (

                    <div className="overflow-auto rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Module
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Index
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Description
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {data?.map((tp) => (
                  <tr
                    className="hover:bg-gray-100 cursor-pointer"
                    key={tp._id}
                    onClick={() => {navigate(`/admin/topic/${tp._id}`)}}
                  >
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="relative h-10 w-10">
                        <ClassOutlinedIcon
                          sx={{ color: purple[700] }}
                          fontSize="large"
                        />
                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {tp.name}
                        </div>
                        <div className="text-gray-400">Topic </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4">{tp.index}</td>
                    <td className="px-6 py-4">{tp.description}</td>
                    
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <button
                          x-data="{ tooltip: 'Delete' }"
                          onClick={(e)=> { e.stopPropagation(); handleOpenDeleteModal(); setDeleteId(tp._id)}}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                        <button
                          x-data="{ tooltip: 'Edite' }"
                          onClick={(e)=>{ e.stopPropagation(); handleUpdateOpen(); setTopicId(tp._id)}}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

                )
            }
          
        </div>
      </div>
    </>
  );
};

export default AdminTopic;

