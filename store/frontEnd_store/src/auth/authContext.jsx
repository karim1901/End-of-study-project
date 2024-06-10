import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";



const authContext = createContext()


const AuthProvider = ({children})=>{

    const [user,setUser]  = useState(false)
    const [employees,setEmployees] = useState([])

    const getEmployees = async()=>{
        axios.get(`http://localhost:8001/employee/${user._id}`).then((res)=>{
            setEmployees(res.data.employees)
        })
    }

    // const logOut=()=>{
    //     localStorage.removeItem('tsx')
    //     setUser(false)
    //     Navigate('/logIn')
    // }

    const value = {user,setUser,setEmployees,employees,getEmployees}

    return <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
}


export default AuthProvider


export const useAuth = ()=>{
    return useContext(authContext)
}