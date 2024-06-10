import { useEffect } from "react"
import EmpoloyeeItem from "./employeeItem"
import { useAuth } from "../../../../auth/authContext"
import axios from "axios"



function ToEmployee({setNext,active,setActive ,setInfoProduct,infoProduct,confirm}){

    const onclick =()=>{
        setNext('nextInfo')
        setActive({...active,infoProduct:'active',employee:''})
    }

    const auth = useAuth()


    useEffect(()=>{

        auth.getEmployees()

    },[])

    // console.log(auth.employees)


    const getEmployee = (id)=>{
        console.log(id)
        setInfoProduct({...infoProduct,employee:id})

    }


    const createProduct =  () => {
         axios.post('http://127.0.0.1:8001/product',infoProduct,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((res)=>{
            console.log(res)
        })
    }
    
    
    return (
        <div className="toEmployee">
            <div className="search">
                <input type="text" placeholder="Search Employee..." />
                <ion-icon name="search-outline"></ion-icon>
            </div>

            <div className="employees">
                {
                    auth.employees.map((employee,index) =>{
                        return <span  onClick={()=>{getEmployee(employee._id)}} key={index}><EmpoloyeeItem employee = {employee}/></span>
                    })
                }
            </div>

            <div className="btnsEmp">
                <button onClick={onclick}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    <p>Back</p>
                </button>
                <button onClick={confirm}> 
                    <p>Confirm</p>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </button>
            </div>
        </div>
    )
}

export default ToEmployee