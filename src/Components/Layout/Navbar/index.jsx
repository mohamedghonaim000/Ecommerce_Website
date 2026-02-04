import React from 'react'
import logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router'
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";



function Navbar() {

    var paths = ['Home', 'Categories', 'Products', 'Cart']
    var token = localStorage.getItem('token')
    return (
        <>
            <nav className='px-10 py-2 bg-[var(--main-color)] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center gap-3'>
                <div className='flex items-center'>
                    <img src={logo} alt="" width={50} />
                    <span className='font-bold text-2xl'>Store</span>
                </div>
                <div>
                    <ul className='font-medium flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row gap-6'>
                        {paths.map((path) => {
                            return <NavLink key={path} to={`/${path.toLowerCase()}`}
                                className={({ isActive }) => {
                                    (isActive) ? "text-[var(--primary-color)] font-semibold"
                                        : "text-gray-700 hover:text-[var(--hover-color)] transition"
                                }
                                }>
                                {path}
                            </NavLink>
                        })}
                    </ul>
                </div>

                <div className='font-medium flex justify-center items-center gap-6'>
                    {token ? <NavLink to='/' className='flex items-center gap-2 text-red-600'><BiLogOut /></NavLink> :
                        (
                            <>
                                <NavLink to='/signup'
                                    className=" text-black hover:text-[var(--hover-color)] transition">
                                    SignUp
                                </NavLink>
                                <NavLink to='/login'
                                    className=" text-black hover:text-[var(--hover-color)] transition">
                                    Login
                                </NavLink>
                            </>
                        )
                    }
                </div>
            </nav>
        </>
    )
}
// Home, Categories, Products, Cart, Login/Signup
export default Navbar
