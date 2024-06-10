import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../auth/authContext";

function BestEmployeeList(){


    const [bestEmployee , setBestEmployee] = useState([])

    const auth = useAuth()


    useEffect(()=>{
        axios.get(`http://localhost:8001/employee/${auth.user._id}/bestEmployee`).then((res)=>{
            setBestEmployee(res.data.employees)
        })
    },[])

    console.log(bestEmployee)

    return(
        <div className="bestEmployeeList">
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bestEmployee.map((emp,index)=>{
                            // console.log(emp)
                            return <tr key={index}>
                                <td>
                                    <div className="name">
                                        <p>{emp.lastName[0].toUpperCase()}{emp.firstName[0].toUpperCase()} </p> 
                                        <p>{emp.lastName} {emp.firstName} </p>
                                    </div>
                                </td>
                                <td>{emp.number_confirmed}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BestEmployeeList;