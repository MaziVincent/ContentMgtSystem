import { Link } from "react-router-dom";
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import logo from '../assets/image/odin-logo.svg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from "react";
import CodeCraft1 from '../assets/image/CCHlogo.svg'

const Footer = () => {



    return ( 
    <>
    
    <footer className=" dark:bg-gray-900 w-full flex flex-col items-center shadow-lg">
            <div className=" pt-4">
                <h1 className=" text-center pb-4 font-bold dark:text-gray-300">Support Us!</h1>
                <h2 className=" font-normal px-4 dark:text-gray-300">The CodeCraftHub is funded by the community. Join us in empowering learners around the globe by supporting The CodeCraftHub!</h2>
            </div>
            <Link className=" flex gap-2 p-6">
                <button className=" border py-3 px-4 rounded-lg dark:text-gray-300">Learn more</button>
                <button className=" border py-3 px-4 rounded-lg bg-teal-700 hover:bg-teal-800 hover:transition-all text-white">Donate Now <TrendingFlatOutlinedIcon /> </button>
            </Link>

            <div className=" w-full flex flex-wrap justify-between items-center gap-4 p-6 border-b border-slate-950">
               <div className=" flex flex-col  gap-4 max-lg:w-full pb-6">
                    <Link className=" flex gap-2 items-center"> 
                        <img className=" w-auto h-12" src={CodeCraft1} alt="img" />
                        <h1 className=" uppercase max-lg:hidden dark:text-gray-300 font-medium text-xl ">The CodeCraftHub</h1>
                    </Link>
                    <p className=" dark:text-gray-300">High quality coding education maintained by an open source community.</p>
                    <div className="flex gap-2 dark:text-gray-600">
                        <Link to='https://github.com/shedrachmk'><GitHubIcon /></Link>
                        <Link><FacebookOutlinedIcon /></Link>
                        <Link><FacebookOutlinedIcon /></Link>
                        <Link><FacebookOutlinedIcon /></Link>
                    </div>
               </div>

               <div className=" leading-9">
                <h3 className="font-bold pb-2 dark:text-gray-300">About Us</h3>
                <ul>
                    <li className=" dark:text-gray-300">About</li>
                    <li className=" dark:text-gray-300">Team</li>
                    <li className=" dark:text-gray-300">Blog</li>
                    <li className=" dark:text-gray-300">Success stories</li>
                </ul>
               </div>

               <div className="">
                    <h3  className=" font-bold pb-3 dark:text-gray-300">Support</h3>
                    <ul>
                        <li className=" dark:text-gray-300">FAQ</li>
                        <li className=" dark:text-gray-300">Contribute</li>
                        <li className=" dark:text-gray-300">Contact Us</li>
                    </ul>
               </div>

               <div className="">
                    <h3 className=" font-bold pb-4 dark:text-gray-300">Guides</h3>
                    <ul>
                        <li className=" dark:text-gray-300">Community guides</li>
                        <li className=" dark:text-gray-300">Installation guides</li>
                    </ul>
               </div>

               <div className="">
                    <h3 className=" font-bold pb-4 pr-20 dark:text-gray-300">Legal</h3>
                    <ul>
                        <li className=" dark:text-gray-300">Terms</li>
                        <li className=" dark:text-gray-300">Privacy</li>
                    </ul>
               </div>
            </div>
            <div className=" p-8 w-full">
                <span className=" font-semibold dark:text-gray-300">
                © 2023 CodeCraftHub. All rights reserved
                </span>
            </div>
        </footer>

    </> 
    );
}
 
export default Footer;