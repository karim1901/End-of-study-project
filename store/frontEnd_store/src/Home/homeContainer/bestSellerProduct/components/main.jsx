import { useState } from "react"
import BestProductItem from "./bestProductItem"
import { useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom"




function Main(){

    const [products,setProducts] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8002/home/best/products").then((res)=>{
            // console.log(res)
            setProducts(res.data.products)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    return <div className="main">

        {
            products.map(product => <Link to={`/item/${product._id}`} key={product._id}><BestProductItem product={product}/></Link>)
        }

    </div>
}


export default Main