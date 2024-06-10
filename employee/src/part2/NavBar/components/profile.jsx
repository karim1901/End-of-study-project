import React from "react";
import { useAuth } from "../../../auth/authContext";


function Profile(){

    const auth = useAuth()
    
    const logOut =()=>{
        localStorage.removeItem('tsx')
        window.location.href = `http://localhost:5174/home`
    }


    return <div className="profile">
        <div className="img">
            {auth.user && <p>{auth.user.firstName[0].toUpperCase()}{auth.user.lastName[0].toUpperCase()}</p> }
        </div>
        <div className="name">
            {auth.user && <p>{auth.user.firstName} {auth.user.lastName}</p> }
            <svg onClick={logOut} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
        </div> 
    </div>
}


export default Profile