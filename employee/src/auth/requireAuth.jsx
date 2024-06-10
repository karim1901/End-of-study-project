import axios from "axios";
import { useEffect, useState } from "react"
import { useAuth } from "./authContext";


function RequireAuth({children}){


    const [loading ,setLoading] = useState(false)

    const auth = useAuth()


    useEffect(()=>{
        axios.post('http://localhost:8001/verifyToken', {}, {
            headers: {
                auth: localStorage.getItem('tsx')
            }
        }).then((result) => {
            // console.log(result.data.user);
            if(!result.data.status || result.data.user.role !=="employee"){
                window.location.href = `http://localhost:5174/login`
            }

            auth.setUser(result.data.user)
            setLoading(true)
        })

    },[])


    return !loading ? <p>wait...</p> : <>{children}</>
}



export default RequireAuth