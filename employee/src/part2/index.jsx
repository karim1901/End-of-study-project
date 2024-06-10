import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/navBar";


function IndexPart2(){
    return <div className="employee">
        <NavBar/>
        <Outlet/>
        
    </div>
}


export default IndexPart2;