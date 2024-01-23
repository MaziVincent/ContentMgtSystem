
import { useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "react-query";
import baseUrl from "../../shared/baseUrl";
import QuizModal from "./QuizModal";



const TopicComponent = () => {

    const { id } = useParams();
  const fetch = useFetch();
  const url = `${baseUrl}topic/${id}`
  const {auth} = useAuth();
  const navigate = useNavigate();

  const getTopic = async () => {

    const response = await fetch(url,auth.accessToken)
    
    return response.data;

  }

  const { data, isError, isLoading, isSuccess } = useQuery(
    ["topic"],
    getTopic,
    { keepPreviousData: true, staleTime: 10000 }
  );


  console.log(data)

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return ( <>
    
    <div className="flex flex-col p-4 gap-5 bg-gray-100 dark:bg-gray-900 dark:text-gray-50">
        <div className="flex flex-col gap-5 rounded-md shadow-md p-6 items-start">
            <div>
            <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={()=>{navigate(-1)}}
          >
            Back
          </button>
            </div>
            <div className="flex items-center gap-6">
             <div className="rounded-full border p-5"> Image </div>
             <h2 className="font-bold text-3xl"> {data?.name}</h2>
             </div>
        </div>

            {
                data?.lessons?.map((lesson)=>(

            <div key={lesson._id} className="flex flex-col justify-center items-center shadow-md p-5 gap-3"> 
            <h3 className="p-3 font-bold text-2xl "> {lesson.title}</h3>
            <p className="w-5/6 text-justify dark:text-gray-100 text-gray-700">{lesson.body}</p>
        </div>

                ))
            }

        <QuizModal isOpen={open} onClose={handleClose} assessments={data?.quiz} />
        
        <div className="flex justify-between p-4 shadow-sm">
            <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Previous </button>
            <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleOpen} > Start Quiz</button>
            <button  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          > Next </button>
        </div>
    </div>
    
    </> );
}
 
export default TopicComponent;