import axios from "axios";
import { createContext, useContext, useState } from "react";



const authContext = createContext()


const AuthProvider = ({children})=>{

    const [user,setUser]  = useState(null)
    const [employees,setEmployees] = useState([])

    const getEmployees = async()=>{

        axios.get(`http://localhost:8001/employee/${user._id}`).then((res)=>{
            setEmployees(res.data.employees)
        })

    }

    const value = {user,setUser,setEmployees,employees,getEmployees}

    return <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
}


export default AuthProvider


export const useAuth = ()=>{
    return useContext(authContext)
}