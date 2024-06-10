import { createContext, useState } from "react";
import Employees from "../parte1/employee_page/employees";
import axios from "axios";
import { useAuth } from "../auth/authContext";



export const productContext = createContext()


const ProductProvider = ({children})=>{

    const auth = useAuth()

    const [infoProduct , setInfoProduct] = useState({
        thumbnail:'',
        title:'',
        description:'',
        category:'',
        stock:'',
        pricePurchase:'',
        priceTaxes:'',
        price:'',
        id:'',
        employee:''
    })



    const [countsOrder , setCountsOrder] = useState([])
    const [orders , setOrders] = useState([])


    const orderCounts = async()=>{
        const res = await axios.get(`http://localhost:8001/order/${auth.user._id}`)

        setCountsOrder(res.data.data)
    }



    const getOrders = async(status)=>{
        const res = await axios.get(`http://localhost:8001/order/${auth.user._id}/${status}`)

        // console.log(res)
        setOrders(res.data.orders)
    }


    const updateOrder =  (data)=>{

        axios.put(`http://localhost:8001/order/${data._id}`,data).then((res)=>{
            getOrders(data.oldStatus)
        }).catch((err)=>{
            console.log(err.message)
        })
    }





    const value = {infoProduct,setInfoProduct,orderCounts,getOrders,orders,countsOrder,updateOrder}
    
    return <productContext.Provider value={value}>
        {children}
    </productContext.Provider>
}



export default ProductProvider
