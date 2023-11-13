import { Link } from "react-router-dom";
import BgImg from '../assets/image/odin-fst-bg-img.svg'
import Page1 from '../assets/image/page1.svg'
import Page2 from '../assets/image/page2.svg'
import Page3 from '../assets/image/page3.svg'
import Post1 from '../assets/image/post1.svg'
import Post2 from '../assets/image/post2.svg'
import Post3 from '../assets/image/post3.svg'
import Post4 from '../assets/image/post4.svg'
import Post5 from '../assets/image/post5.svg'
import Post6 from '../assets/image/post6.svg'
import Post7 from '../assets/image/post7.svg'
import Post8 from '../assets/image/post8.svg'
import Post9 from '../assets/image/post9.svg'
import Stories1 from '../assets/image/stories1.jpg'
import Stories2 from '../assets/image/stories2.jpg'
import Stories3 from '../assets/image/stories3.jpg'
import Stories4 from '../assets/image/stories4.jpg'

const Body = () => {
    return ( 
    <>
        <div className=" relative z-0 w-full p-8 text-center dark:bg-gray-900 bg-white dark:text-gray-100">
           <header className=" p-4">
                <div className=" max-w-4xl mx-auto sm:pt-16 ">
                    <h1 className=" text-4xl sm:text-6xl text-gray-700 dark:text-gray-200 font-medium mx-auto pb-6 tracking-tighter">
                        <span>Your </span> 
                        <span className=" text-yellow-600 dark:text-yellow-700">Career in Web Development</span> 
                        <span className=" block font-medium">Starts Here</span>
                    </h1>
                    <div className=" text-gray-600 dark:text-gray-300/80 pb-8 max-w-xl mx-auto">
                        <p className=" mb-4 text-xl text-gray-500 dark:text-gray-400">Our full stack curriculum is free and supported by a passionate open source community.</p>
                    </div>
                </div>
                <Link><button className=" border border-gray-400 rounded-lg p-3 text-base ">View Full Curriculum</button></Link>
           </header>
           <img className=" w-full h-full" src={BgImg} alt="" />
        </div>

        <div className=" dark:bg-gray-800">
            <div className="page-container py-20">
                <div className=" text-center max-w-3xl mx-auto mb-12">
                    <h2 className=" text-3xl text-gray-800 dark:text-gray-200 mb-5">How it Works</h2>
                    <p className=" sm:text-lg dark:text-gray-300">
                        This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.
                    </p>
                </div>

                <div className=" flex justify-center items-center flex-col md:flex-row max-w-5xl mx-auto text-center">
                    <div className=" p-5 flex-1">
                        <img className=" h-20 sm:h-32 md:h-40 inline" src={Page1} alt="" />
                        <h3 className=" font-medium text-xl dark:text-gray-300 mt-8 mb-4">Learn</h3>
                        <div className=" p-8 sm:p-16 md:p-0 dark:text-gray-400">
                            <p>
                                Learn from a curriculum with the best curated online tutorials, blogs, and courses.
                            </p>
                        </div>
                    </div>
                

                    <div className="p-5 flex-1">
                        <img className=" h-20 sm:h-32 md:h-40 inline"  src={Page2} alt="" />
                        <h3 className=" font-medium text-xl dark:text-gray-300 mt-8 mb-4">Build</h3>
                        <div className=" p-8 sm:p-16 md:p-0 dark:text-gray-400">
                            <p>
                                Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.
                            </p>
                        </div>
                    </div>

                    <div className="p-5 flex-1">
                        <img className=" h-20 sm:h-32 md:h-40 inline"  src={Page3} alt="" />
                        <h3 className=" font-medium text-xl dark:text-gray-300 mt-8 mb-4">Connect</h3>
                        <div className=" p-8 sm:p-16 md:p-0 dark:text-gray-400">
                            <p>
                                You're not alone. Learn and get help from our friendly community of beginner and experienced developers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=" bg-gray-100 dark:bg-gray-900">
        <div className="page2-container py-20">
            <h2 className=" font-medium text-3xl pb-12 text-center text-gray-800 dark:text-gray-200">Learn everything you need to know</h2>
            <div className=" flex flex-row flex-wrap">
                <div className=" w-full lg:w-5/6 mx-auto">
                    <div className=" flex flex-row flex-wrap justify-center px-20 mb-4">

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post1} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">Ruby</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post2} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">Database</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post3} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">Ruby on Rails</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post4} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">Intermediate HTML and CSS</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post5} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">Advanced HTML and CSS</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post6} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">NodeJS</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post7} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">Getting Hired</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post8}alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">Javascript</h3>
                        </Link>

                        <Link className=" rounded-lg w-60 sm:w-56 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 py-6 px-10 flex flex-col items-center text-center hover:shadow-lg m-4">
                            <img className=" h-20 w-20 sm:h-40 sm:w-40" src={Post9} alt="" />
                            <h3 className=" font-semibold text-xl dark:text-gray-300 mt-4 flex grow items-center">React</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="button text-center pt-8">
                <Link>
                    <button className=" text base py-3 px-6 rounded-lg border dark:text-gray-300 border-gray-300">Explore Curriculum</button>
                </Link>
            </div>
        </div>
        </div>

        <div className=" w-full bg-gradient-to-b from-white to-gray-100 dark:bg-gray-800  dark:bg-none">
            <div className=" py-20">
                <div className="">
                    <h2 className="  text-center font-medium text-3xl text-gray-800 dark:text-gray-200">Success Stories</h2>
                    <div className=" p-16 max-w-7xl mx-auto mt-8 sm:mt-16 flex flex-nowrap xl:flex-wrap flex-col xl:flex-row  items-center xl:items-start">

                        <div className="stories1 px-6 sm:px-0 max-w-xl xl:max-w-none xl:w-1/2 flex pb-9">
                            <div className=" w-16 sm:w-24 text-center pt-4 sm:flex justify-center">
                                <img className=" w-12 h-12 rounded-full shadow-inner" src={Stories1} alt="" />
                            </div>
                            <div className=" flex-1">
                                <p className="">
                                    <Link className=" underline hover:no-underline text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                        Rob Pando
                                    </Link>
                                </p>
                                <div className=" text-xl dark:text-gray-300">
                                <p>
                                    TOP was a perfect match for my learning style. Not walking me through an entire project but actually forcing me to figure it out on my own, by pointing me...
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="stories2 stories1 px-6 sm:px-0 max-w-xl xl:max-w-none xl:w-1/2 flex pb-9">
                            <div className=" w-16 sm:w-24 text-center pt-4 sm:flex justify-center">
                                <img className=" w-12 h-12 rounded-full shadow-inner" src={Stories2} alt="" />
                            </div>
                            <div className=" flex-1">
                                <p>
                                    <Link className=" underline hover:no-underline text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                    Cody Loyd
                                    </Link>
                                </p>
                                <div className=" text-xl dark:text-gray-300">
                                <p>
                                    Before I started CodeCraftHub I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a front...
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="stories3 stories1 px-6 sm:px-0 max-w-xl xl:max-w-none xl:w-1/2 flex pb-9">
                            <div className=" w-16 sm:w-24 text-center pt-4 sm:flex justify-center">
                                <img className=" w-12 h-12 rounded-full shadow-inner" src={Stories3} alt="" />
                            </div>
                            <div className="  flex-1">
                                <p>
                                    <Link className=" underline hover:no-underline text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                        Andrej Dragojević
                                    </Link>
                                </p>
                                <div className=" text-xl dark:text-gray-300">
                                <p className="">
                                    An incredible self-paced curriculum that consists of the best resources for learning programming on the web! It was an invaluable resource on my path to a becoming a software developer....
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="stories4 stories1 px-6 sm:px-0 max-w-xl xl:max-w-none xl:w-1/2 flex pb-9">
                            <div className=" w-16 sm:w-24 text-center pt-4 sm:flex justify-center">
                                <img className=" w-12 h-12 rounded-full shadow-inner" src={Stories4} alt="" />
                            </div>
                            <div className=" flex-1">
                                <p>
                                    <Link className=" underline hover:no-underline text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                        Skip Gibson
                                    </Link>
                                </p>
                                <div className=" text-xl dark:text-gray-300">
                                <p>
                                    Before I found CodeCraftHub I had very little direction with my learning, jumping from topic to topic then trying to piece things together as I went. Having this...
                                </p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
 
export default Body;