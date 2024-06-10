import React from "react";
import Logo from "./components/logo";
import Menu from "./components/menu";
import Profile from "./components/profile";


function NavBar(){
    return <div className="navBar">
        <Logo />
        <Menu />
        <Profile />
    </div>
}


export default NavBar