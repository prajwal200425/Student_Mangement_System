import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
export const Navbar = () => {

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [login, setLogin] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (token) {
            setIsLogin(true);
            setLogin(JSON.parse(user));
        } else {
            setIsLogin(false);
            setLogin(null);
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setIsLogin(false);
        setLogin(null);
        navigate("/register")
    }


    return (

        <>
            <nav className='bg-white dark:bg-gray-900 shadow-md px-4 py-3 '>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>


                    <div className=' text-2xl font-bold text-blue-600'>
                        <Link to='/'>Student Management System</Link>
                    </div>


                    <div className='flex items-center justify-between'>

                        <div className='space-x-30 mr-50'>

                            <Link to={isLogin ? "/" : '/'} className='text-gray-700 dark:text-gray-200 hover:text-blue-600'>Home</Link>
                            <Link to={!isLogin ? "/register" : '/add'} className='text-gray-700 dark:text-gray-200 hover:text-blue-600 '>Add Record</Link>
                            <Link to={!isLogin ? "/register" : '/records'} className='text-gray-700 dark:text-gray-200 hover:text-blue-600 '>Records</Link>
                        </div>
                        <div className='absolute top-2 right-6'>
                            {
                                !isLogin ? (
                                    <button onClick={() => navigate("/register")} className='bg-blue-700 px-4 py-2 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-800'>
                                        Register
                                    </button>
                                ) : (
                                    <div className='flex gap-2'>
                                        <button className='flex items-center  px-4 py-2 border border-gray-400 rounded-md bg-green-700 text-white font-semibold hover:bg-green-900'>{login?.username || "User"}</button>
                                        <div className='    w-20 bg-white rounded-lg shadow-lg border '>
                                            <button onClick={handleLogout} className='w-full text-center px-4 py-2 text-white font-semibold bg-red-600 hover:bg-gray-100 hover:text-black rounded-lg'>Logout</button>
                                        </div>
                                    </div>

                                )
                            }


                        </div>


                    </div>

                </div>
            </nav>
        </>
    )
}
