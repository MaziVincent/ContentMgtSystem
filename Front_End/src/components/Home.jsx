import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";


const Home = () => {
    const [mobileNav, setMobileNav] = useState(false);
    return ( 
        <>
        
            <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
            <Outlet />
            <Footer />
        
        </>
     );
}
 
export default Home;