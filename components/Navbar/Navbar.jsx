// import {useEffect} from "react";
import React from "react"; 
import {NavLink } from "react-router-dom";
//import styles from "./components/Navbar/Navbar.module.css"

function Navbar(){

    return(
        <>
          <div className="nav">
            {/*Home Tab*/}
            <NavLink style={({isActive})=>
            (isActive?{color:"blue"}: undefined)} to="/">
                <h4> Home</h4>
            </NavLink>

            {/*Login tab*/}
            <NavLink style={({isActive})=>
            (isActive?{color:"blue"}: undefined)} to="/login">
                <h4> Login</h4>
            </NavLink>

            {/*Register tab*/}
            <NavLink style={({isActive})=>
            (isActive?{color:"blue"}: undefined)} to="/register">
                <h4> Register</h4>
            </NavLink>

            {/*Cart tab, need to make itauthorized
            accessible only when user is logged in, according to that ca make it active
            or inactive
            */}
            <NavLink style={({isActive})=>
            (isActive?{color:"blue"}: undefined)} to="/orders">
                <h4> Orders</h4>
            </NavLink>
          </div>
         {/*} <Outlet/>*/}
        </>
    )
}
export default Navbar;