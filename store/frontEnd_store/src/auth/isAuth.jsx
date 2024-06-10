import axios from "axios";
import { useEffect, useState } from "react"
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";


function IsAuth({children}){


    const [loading ,setLoading] = useState(false)

    const auth = useAuth()

    const Navigate = useNavigate()


    useEffect(()=>{
        axios.post('http://localhost:8001/verifyToken', {}, {
            headers: {
                auth: localStorage.getItem('tsx')
            }
        }).then((result) => {
            console.log(result.data.user);
            if(!result.data.status){
                Navigate('/login')
            }


            auth.setUser(result.data.user)
            setLoading(true)
        })

    },[])


    return loading && <>{children}</>
}



export default IsAuth