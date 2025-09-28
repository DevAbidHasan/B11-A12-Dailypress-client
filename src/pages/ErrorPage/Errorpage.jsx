import React, { useEffect } from 'react';
import { NavLink } from 'react-router';
import errorImage from "../../../public/error.jpeg";
// import Lottie from 'react-lottie';
import { Helmet } from 'react-helmet';
// import toast, { Toaster } from 'react-hot-toast';
import Lottie from 'react-lottie';
import { FaArrowCircleLeft } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const ErrorPage = () => {
    useEffect(()=>{
        toast.error("⚠️ ERROR, Webpage Not Found !!!");
    },[])
    return (
        <div className='flex inter items-center mt-10 md:mt-20 flex-col justify-center'>
            <Helmet>
                <title>
                    DailyPress || Page Not Found - 404
                </title>
            </Helmet>
            <img className='max-w-[300px]' src={errorImage} alt="" />
            <ToastContainer/>
            <h2 className='text-center text-red-600'>404 Not Found 😵 ❌ ❌</h2>
            <div className="flex mt-10 justify-center items-center ">
                <NavLink to="/" className="btn btn-secondary w-auto">
                    <FaArrowCircleLeft/>Go Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;