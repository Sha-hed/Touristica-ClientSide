import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import { useEffect } from "react";


const Root = () => {

    const loc = useLocation();
     
    useEffect(()=>{
        if(loc.pathname === '/'){
            document.title = 'Touristica | Home'
        }else if(loc.state){
            document.title = `Touristica | ${loc.state}`
        }
        
        else{
            document.title = `Touristica | ${loc.pathname.replace('/','')}`
        }

    },[loc.pathname])

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;