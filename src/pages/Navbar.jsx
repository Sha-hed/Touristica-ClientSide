import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Route/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allSpots'>All Tourists Spot</NavLink></li>
        {
            user && <>
                <li><NavLink to='/addSpots'>Add Tourists Spot</NavLink></li>
                <li><NavLink to='/myList'>MyList</NavLink></li>
            </>
        }
    </>
    const logout = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(()=>{
                    navigate('/')
                },2300)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-primary gap-0 text-3xl">Touris<span className="text-secondary">tica</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3" title={user.displayName}>
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <a onClick={logout} className="btn btn-active btn-accent">Sign Out</a>
                    </> :
                    <div className="mr-5">
                        <Link to='/login'> <button className="btn btn-active btn-accent">Login</button></Link>
                        <Link to='/register'> <button className="btn btn-active btn-accent">Register</button></Link>
                    </div>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;