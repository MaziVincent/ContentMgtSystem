import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../assets/image/odin-logo.svg'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Logo2 from '../assets/image/odin-logo.svg'
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CodeCraft1 from '../assets/image/CCHlogo.svg'
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Header = ({mobileNav, setMobileNav}) => {
    const {auth} = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();
    const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setMobileNav(!mobileNav);

    // console.log(setShowDiv);
  };

  const [isDarkMode, SetisDarkMode] = useState(true)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode)
    } , [isDarkMode])

    const toggleDarkmode = () => {
        // console.log(isDarkMode);
        SetisDarkMode((prevMode) => !prevMode);
        
    }

    const handleLogOut = async ()=>{

        const response = await  logout();
        console.log(response)
        toast('Logged out Successfully')
        navigate('/');
        toggleDiv()

    }
    

    return ( 
    <>
    <ToastContainer />
    
    {
        mobileNav && (
        <div className=" fixed inset-0 flex z-40 lg:hidden ">
        
        <div className=" relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800 focus:outline-none">
            <div className="close absolute top-2 right-2 -mr-12 pt-3">
                <button className=" ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className=" sr-only">Close sidebar</span>
                    <CloseIcon onClick={toggleDiv} className=" h-6 w-6 text-white" />
                </button>
                {}
            </div>

            <div className="containernav flex-1 h-0 pt-3 pb-4 overflow-y-auto">
                <div className=" flex-shrink-0 flex items-center px-4">
                    <Link to="/" className=' flex items-center gap-3 dark:text-gray-300'>
                        <img className=' w-auto h-12' src={CodeCraft1} alt="" />
                        <h1 className=" font-medium text-lg uppercase"> The CodeCraftHub</h1>
                    </Link>
                </div>

                <nav className="navs mt-3">
                    <div className=" px-2 space-y-1">
                        <Link to="/" className=' text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium gap-3'> <HomeOutlinedIcon />Home</Link>
                        <Link to="/path" className=' text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium gap-3'> <LocalLibraryOutlinedIcon />All Paths</Link>
                        <Link to="/about" className=' text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium gap-3'> <InfoOutlinedIcon />About</Link>
                        
                    </div>
                </nav>
                <hr className=" border-t border-gray-200 dark:border-gray-600 my-4" />

                <div className=' flex flex-col gap-4 py-6'>
                    {!auth.user && <Link to="/signup" className='  text-gray-600 hover:bg-gray-50  dark:hover:bg-gray-700 dark:text-gray-300 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium gap-3'> 
                        <RocketLaunchOutlinedIcon />Get started
                    </Link>}

                   { !isDarkMode ?
                     <Link onClick={toggleDarkmode}  className='  text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium gap-3'> 
                        <LightModeOutlinedIcon />Light mode
                    </Link> :
                        <Link onClick={toggleDarkmode} className=" dark:text-gray-300  dark:hover:bg-gray-700 group flex items-center px-2 py-2 text-base font-medium gap-3"> 
                            {isDarkMode}
                        <DarkModeOutlinedIcon  /> Dark mode
                    </Link>
                   }
                    {
                        auth.user ? 
                        <Link to="" onClick={handleLogOut} className='  text-gray-600 hover:bg-gray-50  dark:hover:bg-gray-700 dark:text-gray-300 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium gap-3'> <LoginOutlinedIcon color="red" />Sign Out</Link>
                        :
                        <Link to="/login" className='  text-gray-600 hover:bg-gray-50  dark:hover:bg-gray-700 dark:text-gray-300 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium gap-3'> <LoginOutlinedIcon />Sign in</Link>

                    }
                </div>
            </div>
        </div>
    </div>
    )}

    {/* <div className=' fixed inset-0 bg-gray-600 bg-opacity-75 z-20 top-0 bottom-0 w-80 sm:max-w-sm px-4 pt-4'>
        </div>
        <div className=' fixed inset-0 bg-gray-600 bg-opacity-75 z-20 top-0 bottom-0 w-80 sm:max-w-sm px-4 pt-4'>
        </div>
 */}
    <div className="">
        
        <header className=" dark:bg-gray-900 border-gray-200 dark:border-gray-800 bg-white border-b">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className=" flex justify-between">
                    <div className=" flex">
                        <div className=" flex-shrink-0 flex gap-3 items-center">
                            <Link className="" to="/">
                                <img  alt="CodeCraftHub" className=" block  h-12 w-auto" src={CodeCraft1} />
                            </Link>
                            <Link to="/">
                                <h2 className=" font-medium text-xl uppercase max-lg:hidden dark:text-gray-300 "> The CodeCraftHub</h2>
                            </Link>
                        </div>
                    </div>

                    <div className=" hidden md:ml-6 md:flex sm:items-center">
                       <div className=" hidden md:ml-6 md:flex sm:space-x-8">
                            <Link className=" text-sm border-transparent text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 inline-flex items-center px-1 pt-1 font-medium border-orange-300" to="/path">All paths</Link>
                            <Link className=" text-sm border-transparent text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 inline-flex items-center px-1 pt-1 font-medium border-orange-300" to="/about">About</Link>
                            {
                                auth.user?
                                <Link className=" text-sm border-transparent text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 inline-flex items-center px-1 pt-1 font-medium border-orange-300" to="/dashboard">Dashboard</Link>
                                : <Link className=" text-sm border-transparent text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 inline-flex items-center px-1 pt-1 font-medium border-orange-300" to="/login">Sign In</Link>
                            }
                            
                           
                            {isDarkMode ? 
                            <Link className=" text-gray-700 dark:text-gray-300 group flex items-center text-sm">
                                <DarkModeOutlinedIcon onClick={toggleDarkmode} />
                                {/* <span className=" hidden hover:block">theme icon</span> */}
                            </Link> :
                                <Link className=" text-gray-400 hover:text-gray-600 group flex items-center text-sm">
                                    {isDarkMode}
                                    <LightModeOutlinedIcon onClick={toggleDarkmode} />
                                </Link>
                            }
                            {
                            auth.user ?  <Link to="" onClick={handleLogOut} className=" py-3 md-py-2 md:px-2 lg:px-6 text-sm bg-red-700 bord hover:bg-red-800 hover:transition-all duration-300  text-white rounded-lg">
                                Logout
                            </Link>
                            : <Link to="/signup" className=" py-3 md-py-2 md:px-2 lg:px-6 text-sm bg-teal-700 bord hover:bg-teal-900 hover:transition-all duration-300  text-white rounded-lg">
                            Get Started
                        </Link>
                            }
                            
                       </div>
                    </div>
                    <button className=" hidden max-md:block pt-2 dark:text-gray-300">
                        <MenuOutlinedIcon onClick={toggleDiv} />
                    </button>
                </div>
            </div>
        </header>
    </div>
    </> 
    );
}
 
export default Header;