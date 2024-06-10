import React, { useContext, useEffect, useState } from "react";
import Card from "./component/card";
import { cancelling, confirmed, mystore, orders } from "../icon";
import BestProducts from "./component/BestProducts";
import BestEmployees from "./component/BestEmployees";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/authContext";
import { productContext } from "../../context/productContext";
import axios from "axios";

function Dashboard(){

    const auth = useAuth()

    const order = useContext(productContext)

    const [loading , setLoading] = useState(false)


    useEffect(()=>{
        order.orderCounts()
        setLoading(true)
    },[])


    const [bestProduct , setBestProduct] = useState([])


    useEffect(()=>{
        axios.get(`http://localhost:8001/product/best/${auth.user._id}`).then((res)=>{
            setBestProduct(res.data.data)
        })
    },[])

    // useEffect(()=>{
    //     axios.get(`http://localhost:8001/product/best/${auth.user._id}`).then((res)=>{
    //         setBestProduct(res.data.data)
    //     })
    // },[])



    return !loading ? <p>wait....</p> :<div className="dashboard">
        <div className="title">
            <p>Dashboard</p>
        </div>
        
        <div className="cards">

            <NavLink to={`http://localhost:5174/store/${auth.user._id}`}>
                <Card 
                    title={"My Store"} 
                    icon={mystore}
                    count={order.countsOrder.nbrProducts}
                />
            </NavLink>

            <NavLink to='/myEcom/orders'>
                <Card 
                    title={"Orders"} 
                    icon={orders}
                    count={order.countsOrder.nbrNewOrder}
                />
            </NavLink>
 
            <NavLink to='/myEcom/confirmed'>
                <Card 
                    title={"Confirmed"} 
                    icon={confirmed}
                    count={order.countsOrder.nbrConfirmed}
                />
            </NavLink>

            <NavLink to='/myEcom/cancelling'>
                <Card 
                    title={"Cancelling"} 
                    icon={cancelling}
                    count={order.countsOrder.nbrCancelling}
                />
            </NavLink>
        </div>

        <div className="best">
            <BestProducts bestProduct={bestProduct}/>
            <BestEmployees />
        </div>
    </div>
}

export default Dashboard