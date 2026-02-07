import logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router'
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from '../../../Store/Slices/auth';



function Navbar() {
const routes = [
    { path: '/', name: 'Home' },
    { path: '/contact', name: 'Contact' },
    { path: '/about', name: 'About' },

]
    const isLoggedin= useSelector((state)=>state.auth.isLoggedin)
    const dispatch = useDispatch()
    const logout=()=>{
        localStorage.removeItem('token')
        dispatch(changeAuth(false))
    }
    return (
        <>
            <nav className='px-10 py-2 bg-[var(--main-color)] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center gap-3'>
                <div className='flex items-center'>
                    <img src={logo} alt="" width={50} />
                    <span className='font-bold text-2xl'>Store</span>
                </div>
                <div>
                    <ul className='font-medium flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row gap-6'>
                        {routes.map((item) => {
                            return <NavLink key={item.name} to={item.path} className={({ isActive }) => (isActive) ? "text-[var(--primary-color)] font-semibold" : "text-gray-700 hover:text-[var(--hover-color)] transition"}>{item.name}</NavLink>
                        })}
                    </ul>
                </div>
                <div className='font-medium flex justify-center items-center gap-6'>
                    {isLoggedin ? <NavLink to='/' className='flex items-center gap-2 text-red-600' onClick={()=>{logout()}}><BiLogOut /></NavLink> :
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



export default Navbar
