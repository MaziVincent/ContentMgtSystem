
import useFetch from "../../hooks/useFetch";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "react-query";
import baseUrl from "../../shared/baseUrl";


const ModuleComponent = ({id}) => {

    const fetch = useFetch();
    const url = `${baseUrl}module/${id}`
    const {auth} = useAuth();
  
    const getModule = async () => {
  
      const response = await fetch(url,auth.accessToken)
      
      return response.data;
  
    }
  
    const { data, isError, isLoading, isSuccess } = useQuery(
      ["module"],
      getModule,
      { keepPreviousData: true, staleTime: 10000 }
    );
    console.log(data)
  

    return (<>
    

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>{data?.name}</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>How This Course Will Work</p>
                                </div>
                            </Link>
                            <turbo-frame>
                                <Link>
                                    <CheckCircleIcon />
                                </Link>
                            </turbo-frame>
                        </div>
                    </div>

                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>introduction to Web Developtment</p>
                                </div>
                            </Link>
                            <turbo-frame>
                                <Link>
                                    <CheckCircleIcon />
                                </Link>
                            </turbo-frame>
                        </div>
                    </div>
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Motivation and Mindset</p>
                                </div>
                            </Link>
                            <turbo-frame>
                                <Link>
                                    <CheckCircleIcon />
                                </Link>
                            </turbo-frame>
                        </div>
                    </div>
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Asking For Help</p>
                                </div>
                            </Link>
                            <turbo-frame>
                                <Link>
                                    <CheckCircleIcon />
                                </Link>
                            </turbo-frame>
                        </div>
                    </div>
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Join the CodeCraftHub Community</p>
                                </div>
                            </Link>
                            <turbo-frame>
                                <Link>
                                    <CheckCircleIcon />
                                </Link>
                            </turbo-frame>
                        </div>
                    </div>
                </div>
            </div>
    
     


    </>)
}

export default ModuleComponent