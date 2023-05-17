import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Sheared/Navbar/Navbar';
import Footer from '../Pages/Sheared/Footer/Footer';


const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;