import { useState } from "react"
import { useAuth } from "../../auth/authContext"
import { iconCoupon, iconFavourite, iconHeart, iconProfile, iconRecent, iconUsers } from "../../icon"
import { useNavigate } from "react-router-dom"





function MyProfile(){

    const auth = useAuth()

    const Navigate = useNavigate()

    const [client,setClient] = useState({
        firstName: `${auth.user.firstName}`,
        lastName: `${auth.user.lastName}`,
        phone:`${auth.user.phone}`,
        email: `${auth.user.email}`,
        userName:`${auth.user.userName}`
    })

    const logOut=()=>{
        localStorage.removeItem('tsx')
        Navigate("/home")
    }


    return <div className="myProfile">
        <div className="headerProfile">
            <div className="profile">
                <div className="icon">
                    {iconProfile}
                </div>
                <h3>{client.userName}</h3>
            </div>
            
            <button onClick={logOut}>
                <ion-icon name="log-out-outline"></ion-icon>
                <p>Log Out</p>
            </button>
        </div>
        <div className="info">
            <ul>
                <li>
                    {iconFavourite}
                    <p>My Favourites</p>
                </li>
                <li>
                    {iconUsers}
                    <p>Subscriptions</p>
                </li>
                <li>
                    <ion-icon name="time-outline"></ion-icon>
                    <p>Recently seen</p>
                </li>
                <li>
                    {iconCoupon}
                    <p>Coupons</p>
                </li>
            </ul>
        </div>
        

    </div>
}

export default MyProfile