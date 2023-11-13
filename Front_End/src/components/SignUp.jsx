import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';


const SignUp = () => {
  return (
    <div className=' bg-gray-50 dark:bg-gray-900 min-h-screen'>
       <div className="contaoner mx-auto max-w-7xl py-14 px-4">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className=' mt-6 text-center text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300'>Sign up for free</h2>
            <p className=' mt-2 text-center text-sm text-gray-600 dark:text-gray-300'>
                <span>Or </span>
                <Link to="/login" className=' font-medium underline hover:no-underline text-gray-700 dark:text-gray-300 hover:text-gray-800'>
                    sign in to your existing accound
                </Link>
            </p>
        </div>
        <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" bg-white dark:bg-gray-800 shadow rounded-lg">
                <div className=" p-8">
                    <form action="/signuppage" className="">
                        <input type="hidden" autoComplete='off' />
                        <div className=" space-y-6">

                            <div >
                                <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="user_email">Username</label>
                                <div className="input mt-2 relative rounded-md shadow-sm">
                                    <input className=' dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600' required='required' type="text" />
                                </div>
                                <div className=" mt-2 text-sm text-red-600 hidden"></div>
                            </div>

                            <div >
                                <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="user_email">Email address</label>
                                <div className="input mt-2 relative rounded-md shadow-sm">
                                    <input className=' dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600' required='required' type="email" />
                                </div>
                                <div className=" mt-2 text-sm text-red-600 hidden"></div>
                            </div>

                            <div className="">
                                <label className=' block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor="password">Password</label>
                                <div className="input mt-2 relative rounded-md shadow-sm">
                                    <input className=' dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600' required='required' type="password" />
                                </div>

                                <div className=" mt-2 text-sm text-red-600 hidden"></div>
                            </div>

                            <div className="">
                                <label className=' block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor="password">Password confirmation</label>
                                <div className="input  mt-2 relative rounded-md shadow-sm">
                                    <input className=' dark:bg-gray-700 block w-full rounded-md border py-3 px-3 focus:outline-none border-gray-300 focus:ring-blue-600 focus:border-blue-600' required='required' type="password" />
                                </div>

                                <div className=" mt-2 text-sm text-red-600 hidden"></div>
                            </div>

                            <div className=" text-center">
                                <Link className=' font-medium text-gray-500 dark:text-gray-300 hover:underline text-sm'>By signing up, you agree to our terms of use.</Link>
                            </div>

                            <div className="">
                                <input className=' border rounded-md border-gray-300 bg-teal-800 text-white w-full py-2 px-2 text-sm' type="submit" value="Sign in" />
                            </div>
                        </div>
                    </form>

                    <div className=" mt-6">
                        <div className=' relative'>
                            <div className=" absolute inset-0 flex items-center">
                                <div className=" w-full border-t border-gray-300"></div>
                            </div>
                            <div className=" relative flex justify-center text-sm">
                                <p className=' bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-300'> Or continue with</p>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-6 grid grid-cols-2 gap-3">
                        <div className="">
                            <form action="">
                                <button className=' border rounded-md border-gray-300 w-full py-2 px-4 text-sm font-medium text-gray-500 dark:text-gray-300 focus:ring-0'>
                                    <span className=' sr-only'>Sign in with Github</span>
                                    <GitHubIcon />
                                </button>
                                <input type="hidden" name="" id="" />
                            </form>
                        </div>

                        <div className="">
                            <form action="">
                                <button className=' border rounded-md border-gray-300 w-full py-2 px-4 text-sm font-medium text-gray-500 dark:text-gray-300 focus:ring-0'>
                                    <span className=' sr-only'>SIgn in with Google</span>
                                    <GoogleIcon />
                                </button>
                                <input type="hidden" name="" id="" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
