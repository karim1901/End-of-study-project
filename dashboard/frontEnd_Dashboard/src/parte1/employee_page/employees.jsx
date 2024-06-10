import { useEffect, useRef, useState } from "react"
import EditCreate from "./components/edit/editCreate"
import EmployeesList from "./components/employeesList/employeesList"
import SearchCreate from "./components/employeesList/searchCreate"
import axios from "axios"
import { useAuth } from "../../auth/authContext"


function Employees(){

    const auth = useAuth()

    const[search,setSearch]=useState('')

    const[employee,setEmployee]=useState([])


    const[focus,setFocus]=useState({
        FirstName:'',
        LastName:'',
        Phone:'',
        AdressMail:'',
        UserName:'',
        Password:''
    })

    const[infoEmployee,setInfoEmployee]=useState({
        id:"",
        FirstName:'',
        LastName:'',
        Phone:'',
        AdressMail:'',
        UserName:'',
        Password:'',
        marchent:auth.user._id
    })

    const element = useRef()

    const[showEdit,setShowEdit]=useState(null)


    const add_click=()=>{
        element.current.classList.remove('active')
        setShowEdit('Create')
        setInfoEmployee({
            id:"",
            FirstName:'',
            LastName:'',
            Phone:'',
            AdressMail:'',
            UserName:'',
            Password:'',
            marchent:auth.user._id
        })
    }

    const full_view=()=>{
        element.current.classList.add('active')
        setShowEdit(null)
    }

    const up_info=(emp)=>{
        add_click()
        setShowEdit('Edit')
        setInfoEmployee({
            id:emp._id,
            FirstName:emp.firstName,
            LastName:emp.lastName,
            Phone:emp.phone,
            AdressMail:emp.email,
            UserName:emp.userName,
            Password:emp.password,
            marchent:auth.user._id
        })
    }



    const getData = async ()=>{
        const resp = await axios.get(`http://127.0.0.1:8001/employee/${auth.user._id}`)
        console.log(resp.data.employees)
        setEmployee(resp.data.employees)
        
    }

    // useEffect(()=>{
        
    // },[])



    const send_data = async()=>{
        const req = await axios.post('http://127.0.0.1:8001/employee',infoEmployee)  ;

        console.log(req.data.message)

        setInfoEmployee({
            id:"",
            FirstName:'',
            LastName:'',
            Phone:'',
            AdressMail:'',
            UserName:'',
            Password:'',
            marchent:auth.user._id
        })

        getData()

        full_view()
    }

    const modify_data= async(id)=>{
        
        const req = await axios.put(`http://127.0.0.1:8001/employee/${infoEmployee.id}`,infoEmployee)  ;

        
        setInfoEmployee({
            id:"",
            FirstName:'',
            LastName:'',
            Phone:'',
            AdressMail:'',
            UserName:'',
            Password:'',
            marchent:auth.user._id
        })

        getData()

        full_view()
    }
 
    const delete_data=async(id)=>{

        await axios.delete(`http://127.0.0.1:8001/employee/${id}`)

        setInfoEmployee({
            id:"",
            FirstName:'',
            LastName:'',
            Phone:'',
            AdressMail:'',
            UserName:'',
            Password:'',
            marchent:auth.user._id
        })
        getData()
    }

    return (
        <div className="employeesContainer">
            <div ref={element} className="employees active">
                <SearchCreate add_click={add_click} setSearch={setSearch}/>
                <EmployeesList employee={employee} setEmployee={setEmployee} delete_data={delete_data} getData={getData} up_info={up_info} search={search}/>
            </div>

            {showEdit=='Create' ?
             <EditCreate type='Create' confirm={send_data} setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} full_view={full_view} focus={focus} setFocus={setFocus}/>
             :(
                showEdit=='Edit' ? 
                <EditCreate type='Edit' confirm={modify_data} setInfoEmployee={setInfoEmployee} infoEmployee={infoEmployee} full_view={full_view} focus={focus} setFocus={setFocus}/>
                : null
             )
            }
             
        </div>
    )
}

export default Employees