import { useEffect } from 'react'
import ProductSaleItem from './components/productSaleItem'
import axios from 'axios'
import { useState } from 'react'
import {Link} from "react-router-dom"



function MidSeasonSale(){

    const [products , setProducts ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8002/home/lastProducts').then((res)=>{
            // console.log(res.data.products)
            setProducts(res.data.products)
        })
    },[])

    return <div className="midSeasonSale">

        {
            products.map(product=><Link to={`/item/${product._id}`} key={product._id}><ProductSaleItem product={product}/></Link>)
        }
        
    </div>
}


export default MidSeasonSale