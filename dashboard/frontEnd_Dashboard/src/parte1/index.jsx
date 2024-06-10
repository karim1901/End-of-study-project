import React, { useEffect } from "react";

import NavBar from "./NavBar/navBar";

import { Outlet} from "react-router-dom";

function IndexParte1(){

    return <div className="containerDashboard">
        <NavBar />
        <Outlet/>
    </div>
}


export default IndexParte1