import { useEffect } from "react";


function EmployeesList({employee,up_info,getData,delete_data,search}){



    useEffect(()=>{
        getData()
        console.log(employee)
    },[])





    return(
        <div className="employeesList">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Adress Email</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        employee
                        .filter(emp=>emp.firstName.toLowerCase().includes(search.toLowerCase()))
                        .map((emp)=>{
                            return(
                                <tr key={emp._id}>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.userName}</td>
                                    <td>{emp.code}</td>
                                    <td>
                                        <ion-icon name="repeat-outline" onClick={()=>{up_info(emp)}}></ion-icon>
                                        <ion-icon name="trash-outline" onClick={()=>{delete_data(emp._id)}} ></ion-icon>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeesList;