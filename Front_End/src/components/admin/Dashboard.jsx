import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Aside from "./Aside";
const Dashboard = () => {
  
    const [aside, setAside] = useState(false);

    console.log(aside);

  return (
    <>
      <div className="antialiased bg-gray-100 dark:bg-gray-900 h-auto ">
       
       <AdminHeader setAside={setAside} />

        {/* <!-- Sidebar --> */}

        <Aside aside={aside} setAside={setAside} />

        <main className="p-4 md:ml-64 h-auto pt-20">

            <Outlet />
         
        </main>
      </div>
    </>
  );
};

export default Dashboard;
