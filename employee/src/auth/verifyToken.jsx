import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


function VerifyToken(){

    const {token} = useParams()

    const Navigate = useNavigate()

    useEffect(()=>{
        localStorage.setItem('tsx',token)

        Navigate('/myEcom/employee/orders')

    },[])

}


export default VerifyToken