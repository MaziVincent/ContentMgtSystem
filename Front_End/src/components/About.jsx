import React from 'react'
import { Link } from 'react-router-dom'
import About1 from '../assets/image/about1.svg'
import About2 from '../assets/image/about2.svg'
import About3 from '../assets/image/about3.svg'
import About4 from '../assets/image/about4.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import Contentsvg from '../assets/image/contentbg.png'

const About = () => {
  return (
    <>
    <div className='container dark:bg-gray-900'>
      <div className=" grid grid-cols-12">
            <div className=" col-span-12 md:col-start-3 md:col-span-8">
                <div className=" pb-20">
                    <h1 className=' text-3xl font-semibold p-10 text-center dark:text-gray-300'>About The CodeCraftHub</h1>
                    <p className=' prose max-w-none prose-gray leading-8 text-lg dark:text-gray-300'>
                        The CodeCraftHub is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.
                    </p>
                </div>
                <h2 className=' text-center text-gray-700 dark:text-gray-300 text-2xl mb-12'>What you can expect the CodeCraftHub</h2>

                <div className=" sm:grid sm:grid-cols-12 sm:gap-x-6 pb-14">
                    <div className=" flex sm:col-span-2 justify-center">
                        <img className=' w-20 h-20' src={About1} alt="" />
                    </div>
                    <div className=" sm:col-span-10 text-center sm:text-left space-y-3">
                        <h3 className=' pt-10 sm:pt-0 text-lg font-semibold dark:text-gray-300'>A full roadmap to becoming a developer</h3>
                        <p className=' prose prose-gray text-gray-500 dark:text-gray-400'>
                            A full roadmap to becoming a developer
                            Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.
                        </p>
                    </div>
                </div>

                <div className=" sm:grid sm:grid-cols-12 sm:gap-x-6 pb-14">
                    <div className=" flex sm:col-span-2 justify-center">
                        <img className=' w-20 h-20' src={About2} alt="" />
                    </div>
                    <div className=" sm:col-span-10 text-center sm:text-left space-y-3">
                        <h3 className=' pt-10 sm:pt-0 text-lg font-semibold dark:text-gray-300'>Learn by doing</h3>
                        <p className=' prose prose-gray text-gray-500 dark:text-gray-400'>
                            The most effective learning happens while building projects, so we have strategically placed them throughout our curriculum. These projects will make a strong portfolio for you to showcase on your resume.
                        </p>
                    </div>
                </div>

                <div className=" sm:grid sm:grid-cols-12 sm:gap-x-6 pb-14">
                    <div className=" flex sm:col-span-2 justify-center">
                        <img className=' w-20 h-20' src={About3} alt="" />
                    </div>
                    <div className=" sm:col-span-10 text-center sm:text-left space-y-3">
                        <h3 className=' pt-10 sm:pt-0 text-lg font-semibold dark:text-gray-300'>Receive support from others</h3>
                        <p className=' prose prose-gray text-gray-500 dark:text-gray-400'>
                            <Link className=' dark:text-gray-200 underline'>The maintainers of the curriculum</Link> run a Discord community, with the help of countless other volunteers, where you can receive help with anything in our curriculum.
                        </p>
                    </div>
                </div>

                <div className=" sm:grid sm:grid-cols-12 sm:gap-x-6 pb-14">
                    <div className=" flex sm:col-span-2 justify-center">
                        <img className=' w-20 h-20' src={About4} alt="" />
                    </div>
                    <div className=" sm:col-span-10 text-center sm:text-left space-y-3">
                        <h3 className=' pt-10 sm:pt-0 text-lg font-semibold dark:text-gray-300'>Open source and community driven</h3>
                        <p className=' prose prose-gray text-gray-500 dark:text-gray-400'>
                            You can deepen your understanding and improve your GitHub skills by contributing to our open source curriculum and helping others in our Discord community.
                        </p>
                    </div>
                </div>

            </div>
      </div>
    </div>
    
    <section className=' bg-gray-100 dark:bg-gray-800'>
        <div className="section-container py-16 px-8">
            <h2 className=' mb-12 text-center text-2xl font-semibold dark:text-gray-300'>Overview of the CodeCraftHub</h2>
            <div className=' grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16'>

                <div className=' bg-white dark:bg-gray-700 shadow rounded-lg col-span-3 lg:col-span-1'>
                    <div className=' p-8 text-center'>
                        <p className=' font-bold text-2xl dark:text-gray-300'>1143614</p>
                        <p className=' text-gray-500 dark:text-gray-400'>Learners</p>
                    </div>
                </div>

                <div className=' bg-white dark:bg-gray-700 shadow rounded-lg col-span-3 lg:col-span-1'>
                    <div className=' p-8 text-center'>
                        <p className=' font-bold text-2xl dark:text-gray-300'>5000+</p>
                        <p className=' text-gray-500 dark:text-gray-400'>Contributors</p>
                    </div>
                </div>

                <div className=' bg-white dark:bg-gray-700 shadow rounded-lg col-span-3 lg:col-span-1'>
                    <div className=' p-8 text-center'>
                        <p className=' font-bold text-2xl dark:text-gray-300'>2013</p>
                        <p className=' text-gray-500 dark:text-gray-400'>Founded</p>
                    </div>
                </div>

                <div className=" col-span-3 lg:col-span-2">
                    <div className=" bg-white dark:bg-gray-700 shadow rounded-lg h-full">
                        <div className=" p-8 pb-0">
                            <h3 className=' font-bold text-2xl dark:text-gray-300'>Origin of The CodeCraftHub</h3>
                        </div>
                        <div className=" text-base p-8 prose prose-gray max-w-none text-gray-500 dark:text-gray-400 leading-7">
                            <p className=' pb-6'>
                                The CodeCraftHub provides a free open source coding curriculum that can be taken entirely online. Since its inception, it has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects.
                            </p>
                            <p>
                                Erik Trautman founded The CodeCraftHub in 2013. Currently it is maintained and continually improved by a <Link className=' underline text-gray-900 dark:text-gray-200'>team of volunteers</Link> many of whom learned to code with us. Many find success from CodeCraftHub's curriculum because of its hands-on approach with learning and emphasis on building projects. The curriculum is meticulously curated to ensure the content is up-to-date.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" col-span-3 lg:col-span-1">
                    <div className=" bg-white dark:bg-gray-700 shadow rounded-lg">
                        <div className=" p-8 pb-0 flex items-center">
                            <Link className=' pr-4'> <GitHubIcon /> </Link>
                            <h3 className=' font-bold text-2xl inline-block mml-4 dark:text-gray-300'>Open Source</h3>
                        </div>
                        <div className=" p-8 text-base prose prose-gray max-w-none text-gray-500 dark:text-gray-400 leading-8">
                            <p className=' pb-6'>
                                This website and the curriculum it hosts are completely open source. That means anyone can work on new features or fix existing bugs on the website. This also extends to the curriculum itself, anyone can work on new lessons, add new resources and improve existing lessons.
                            </p>
                            <p>
                                The CodeCraftHub would not be possible without the hard work of contributors from all across the world. If you're interested in helping us make The CodeCraftHub better, please find out <Link className=' underline text-gray-900 dark:text-gray-200'>how to contribute.</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    </>
  )
}

export default About
