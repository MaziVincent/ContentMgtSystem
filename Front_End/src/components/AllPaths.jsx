import React from 'react'
import { Link } from 'react-router-dom'
import AllPaths1 from '../assets/image/AllPaths1.svg'
import Path2img from '../assets/image/AllPaths2.svg'
import Path3img from '../assets/image/AllPaths3.svg'

const AllPaths = () => {
  return (
    <div className='page-container dark:bg-gray-900'>
      <div className='  max-w-4xl mx-auto'>
            <h1 className=' font-medium p-12 text-center text-3xl dark:text-gray-300'>All Paths</h1>
            <div className=" bg-white dark:bg-gray-800 shadow rounded-lg">
                <div className=" p-8 pb-0 md:pb-6 md:border-b border-gray-200">
                    <div className=" flex justify-between items-center flex-col sm:flex-row space-y-4 sm:space-y-0">
                        <div className=" flex flex-col space-y-5 sm:space-x-6 sm:space-y-0 sm:flex-row items-center">
                            <Link className='p-2 rounded-full'>
                                <img className=' w-24 h-24' src={AllPaths1} alt="" />
                            </Link>
                            <div className=" flex items-center flex-col sm:block">
                                <Link>
                                    <h2 className=' text-3xl font-medium text-gray-800 dark:text-gray-300'>Foundations</h2>
                                </Link>
                            </div>
                        </div>
                        <div className=" border py-3 rounded-lg bg-gray-700 dark:border-none text-gray-100 space-x-6 justify-center hidden md:flex">
                            <form action="">
                                <button className=' button--dark px-12'>Explore</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=" p-8 pt-6 md:pb-0">
                    <p className=' prose-gray max-w-none text-gray-500 dark:text-gray-300 pb-8 leading-8 text-lg'>
                        This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do and the foundations you'll need for later courses.
                    </p>
                </div>
            </div>
      </div>

      <div className=" relative my-12">
        <div className=" absolute inset-0 flex items-center" aria-hidden="true">
            <div className=" w-full border-t border-gray-300"></div>
        </div>
        <div className=" relative flex justify-center">
            <span className=" px-3 bg-gray-50 dark:bg-gray-900 text-2xl font-medium text-gray-800 dark:text-gray-300">
                Then Choose a learning path:
            </span>
        </div>
      </div>

        <div className=" flex gap-x-10 justify-center gap-y-6 flex-col pb-12 md:flex-row max-lg:px-7 max-sm:p-4">
            <div className=" w-1/3 bg-white dark:bg-gray-800 shadow rounded-lg flex flex-col max-lg:w-1/2  max-sm:w-full">
                <div className=" p-8 pb-0 flex flex-col justify-between items-center">
                    <Link className=' p-2 rounded-full'>
                        <img className=' w-24 h-24' src={Path2img} alt="" />
                    </Link>
                    <div className=" w-full flex justify-between pt-6">
                        <p className=" text-gray-500 dark:text-gray-300">Path</p>
                        <p className=" text-gray-500 dark:text-gray-300">8 Courses</p>
                    </div>
                </div>
                <div className=" p-8 flex-grow">
                    <Link>
                        <h2 className=' text-xl font-medium pb-4 text-gray-800 dark:text-gray-300'>Full Stack Rubby on Rails</h2>
                    </Link>
                    <p className='prose prose-gray max-w-none text-gray-500 dark:text-gray-300'>
                        This path takes you through our entire Ruby on Rails curriculum. The courses should be taken in the order that they are displayed. You'll learn everything you need to know to create beautiful responsive websites from scratch using Ruby on Rails.
                    </p>
                </div>
                <div className=" p-8 pt-0">
                    <div className=" border py-3 rounded-lg bg-gray-700 text-gray-100 w-36 flex space-x-6 items-center justify-center sm:justify-start">
                        <form className=' ' action="">
                            <button className=' button button-dark px-10 lg:px-12'>Explore</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className=" bg-white dark:bg-gray-800 w-1/3 shadow rounded-lg flex flex-col max-xlg:w-1/2 max-lg:w-full max-sm:w-full">
                <div className=" p-8 pb-0 flex flex-col justify-between items-center">
                    <Link className=' p-2 rounded-full'>
                        <img className=' w-24 h-24' src={Path3img} alt="" />
                    </Link>
                    <div className=" w-full flex justify-between pt-6">
                        <p className=" text-gray-500 dark:text-gray-300">Path</p>
                        <p className=" text-gray-500 dark:text-gray-300">6 Courses</p>
                    </div>
                </div>
                <div className=" p-8 flex-grow">
                    <Link>
                        <h2 className=' text-xl font-medium pb-4 text-gray-800 dark:text-gray-300'>Full Stack JavaScript</h2>
                    </Link>
                    <p className='prose prose-gray max-w-none text-gray-500 dark:text-gray-300'>
                        This path takes you through our entire JavaScript curriculum. The courses should be taken in the order that they are displayed. You'll learn everything you need to know to create beautiful responsive websites from scratch using JavaScript and NodeJS.
                    </p>
                </div>
                <div className=" p-8 pt-0">
                    <div className=" border py-3 rounded-lg bg-gray-700 text-gray-100 w-36 flex space-x-6 items-center justify-center sm:justify-start">
                        <form className=' ' action="">
                            <button className=' button button-dark px-10 lg:px-12'>Explore</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default AllPaths
