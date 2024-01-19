import { useState } from "react";
import { useParams } from "react-router-dom";
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import Post3 from '../assets/image/post3.svg'
import useFetch from "../hooks/useFetch";
import useAuth from "../hooks/useAuth";
import { useQuery } from "react-query";
import baseUrl from "../shared/baseUrl";
import ModuleComponent from "./students/ModuleComponent";



const LearningPathDetails = () => {
  const { id } = useParams();
  const fetch = useFetch();
  const url = `${baseUrl}learningPath/${id}`
  const {auth} = useAuth();

  const getLearningPath = async () => {

    const response = await fetch(url,auth.accessToken)
    
    return response.data;

  }

  const { data, isError, isLoading, isSuccess } = useQuery(
    ["learningPath"],
    getLearningPath,
    { keepPreviousData: true, staleTime: 10000 }
  );
  console.log(data)


  
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
      setIsHovered(true)
      console.log(isHovered);
  }
  const handleMouseLeave = () => {
      setIsHovered(false)
  }

  return (
    <div className="page-container bg-gray-100 dark:bg-gray-900 pb-36 p-6">
        <div className=" max-w-3xl mx-auto">
            <div className=" mb-6">
                <div className=" flex justify-center pt-16">
                    <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'inline block'}}>
                        <div className=' border-8 dark:border-gray-400 rounded-full w-28 h-28 text-gray-600 dark:text-gray-400 font-medium flex items-center flex-col p-2 text-sm'>
                         {isHovered ?
                            <span className=" flex items-center flex-col pt-4">
                                <span>  0% </span>
                                <span> complete</span>
                            </span>
                            : 
                            <div className='w-full p-1'>
                                <img src={Post3} alt="img" />
                            </div> 
                         }
                        </div>
                    </Link>
                </div>
                <Link className=''>
                    <h1 className=' mt-4 text-center text-3xl font-medium mx-auto text-gray-800 dark:text-gray-300'>Foundations Course</h1>
                </Link>
            </div>

            <div className=" mb-6">
                <h2 className=' text-lg font-medium mb-1 text-gray-700 dark:text-gray-300'>Overview</h2>
                <p className=' text-gray-500 dark:text-gray-400 max-w-none'>
                    This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do – the foundations you'll need for later courses.
                </p>
            </div>

                {data?.modules.map((module)=>{
                  <div key={module._id}>
                    <ModuleComponent id={module._id} />
                  </div>
                })}

         


            {/* Prerequisites */}

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>Prerequisites</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Computer Basics</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>How Does the Web Work?</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Installation Overview</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Installations</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Text Editors</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Command Line Basics</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Setting Up Git</p>
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

                {/* Git Basics */}

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>Git Basics</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Introduction to Git</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Git Basics</p>
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

            {/* HTML Foundations */}

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>HTML Foundations</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Introduction to HTML and CSS</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>ELement and Tags</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>HTML Boilerplate</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Working with Text</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Lists</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Links and Images</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Commit Messages</p>
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
                                    <HandymanOutlinedIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Project:Recipes</p>
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

            {/* CSS Foundations */}

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>CSS Foundations</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Intro to CSS</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>The Cascade</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Inspecting HTML and CSS</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>The Box Model</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Block and Inline</p>
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

            {/* Flex Box */}

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>Flexbox</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Introduction to Flexbox</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Groeing and Shrinking</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Axes</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Alignments</p>
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
                                    <HandymanOutlinedIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Project:Landing Page</p>
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

            {/* Javascript Basics */}

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>JavaScript Basics</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Fundamental Parts 1</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Fundamental Parts 2</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>JavaScript Developer Tools</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Fundamental Part 3</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Problem Solving</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Understanding Errors</p>
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
                                    <HandymanOutlinedIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Project:Rock Paper Scissors</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Clean Code</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Installing Node.js</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Fundamental Part 4</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>DOM Manipulation and Events</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Revisiting Rock Paper Scissors</p>
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
                                    <HandymanOutlinedIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Project:Etch-a-Sketch</p>
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
                                    <p className=' text-gray-800 dark:text-gray-300'>Fundamental Part 5</p>
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
                                    <HandymanOutlinedIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Project:Calculator</p>
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

            {/* Conclusion*/}

            <div className=" dark:bg-gray-800 rounded-lg shadow dark:ring-1 dark:ring-white/10 dark:ring-inset mb-10">
                <div className=" p-8 pb-0 px-6 pt-4 pb-4 border-b dark:border-gray-700">
                    <Link className=' scroll-mt-5 inline-block'>
                        <h3 className=' text-lg font-medium text-gray-800 dark:text-gray-300 hover:underline w-fit'>Conclusions</h3>
                    </Link>
                </div>
                <div className=" p-8 px-4 py-4">
                    <div className=" flex flex-col space-y-3">
                        <div className=" flex justify-between items-center flex-shrink-1 group hover:bg-gray-100 dark:hover:bg-gray-700 px-2 rounded-lg transition ease-in-out hover:transition-colors">
                            <Link className=' grow py-3'>
                                <div className=" flex items-center gap-3">
                                    <ImportContactsTwoToneIcon className=' w-6 h-6 dark:text-gray-500 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0' />
                                    <p className=' text-gray-800 dark:text-gray-300'>Choose Your Path Forward</p>
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
        </div>
    </div>
  );
};

export default LearningPathDetails;
