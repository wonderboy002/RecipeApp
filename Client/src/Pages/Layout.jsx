import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import "../index.css";

function Layout() {
  return (
    <div className="LandingPage flex flex-col gap-4 p-8 w-full bg-[#16a085] h-screen">
    <Navbar />
    <Outlet/>
  
  </div>
  );
}

export default Layout;
