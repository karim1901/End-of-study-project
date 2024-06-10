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
            <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>
        </div> 
    </div>
}


export default Profile