import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import DummyPerson from '../assets/image/Dummy-Person-bg.png'

const UserDashboard = () => {
  return (
    <div className='pagr-container dark:bg-gray-900 py-10 px-4'>
      <div className="container-items max-w-3xl mx-auto ">
        <h1 className=' text-center font-semibold text-3xl text-gray-600 dark:text-gray-300 pb-10'>Dashboard</h1>
        <div className=" bg-white shadow rounded-lg dark:bg-gray-800 dark:ring-1 dark:ring-white/10 dark:ring-inset mb-16">
            <div className=" p-8">
                <div className=" flex items-center flex-col md:flex-row gap-4">
                    <span className=" relative inline-block rounded-full overflow-hidden bg-gray-100 w-20 items-center h-20">
                        {/* <input className=' absolute w-20 h-20 rounded-full top-3' type="file" name="" id="" 
                        
                        /> */}
                        <img src={DummyPerson} alt="" />

                    </span>
                    <h2 className=' truncate w-full basis-1/2 text-xl text-center md:text-left md:pl-4 font-medium text-gray-700 dark:text-gray-300'>Name</h2>
                    <p className=' text-gray-500 dark:text-gray-400'>
                        <Link className=' text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300 underline'>
                            Description
                        </Link>
                    </p>
                </div>
            </div>
        </div>
        <div className=" mb-24">
            <div className=" text-center mt-0 mb-6 mx-auto">
                <h2 className=" text-gray-700 text-2xl font-medium mb-2 dark:text-gray-300">Skills Progress</h2>
            </div>
            <div className=" flex items-center justify-between flex-col py-8 text-center border-b dark:border-gray-600 md:flex-row md:text-left">
                <div className=" flex items-center flex-col md:flex-row gap-6">
                    <div className=" flex items-center">
                        <Link>
                            <div className=' border-8 dark:border-gray-400 rounded-full w-24 h-24 text-gray-600 dark:text-gray-400 font-medium flex items-center flex-col pt-4 text-sm'>
                                <span>  0% </span>
                                <span> complete</span>
                            </div>   
                        </Link>
                    </div>

                    <div className="">
                        <div className="">
                            <Link>
                                <h3 className=' text-gray-700 font-medium text-lg mb-0 dark:text-gray-300'>Foundations</h3>
                            </Link>
                            <p className=' text-sm text-gray-500 dark:text-gray-400'>48 lessons</p>
                        </div>
                    </div>
                </div>

                

                <div className=" pt-4 md:pt-0">
                    <Link to="/start" className=' rounded-lg border border-gray-500 py-2 px-8 text-gray-700 dark:text-gray-300'>Start
                    </Link>
                </div>
            </div>
        </div>
        <div className=" mb-12">
            <h2 className=' text-gray-700 text-2xl font-medium text-center mb-4 dark:text-gray-300'>Project Submissions
            </h2>
            <h3 className=' text-gray-500 text-center text-lg dark:text-gray-400'>No submissions yet
            </h3>
        </div>
      </div>
      <div className=' max-w-4xl py-20 mx-auto text-center'>
        <h2 className=' mb-4 text-2xl font-light leading-10 text-gray-600 dark:text-gray-200'>Have a question?</h2>
        <p className=' mb-10 font-normal text-gray-500 dark:text-gray-400'>Chat with our friendly CodeCraftHub community in our Discord chatrooms!</p>
        <Link className=' rounded-lg py-3 px-4 text-gray-700 dark:text-gray-300 border border-gray-600'>Open Discord</Link>
      </div>
    </div>
  )
}

export default UserDashboard
