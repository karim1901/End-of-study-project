import { useEffect } from "react"
import ProductItem from "./productItem"
import {useParams,Link} from "react-router-dom"
import axios from "axios"
import { useState } from "react"





function Main({search}){

    const {id} = useParams()

    const [products ,setProducts] = useState([])

    const getProducts = ()=>{
        axios.get(`http://localhost:8001/product/${id}`).then(res => {
            setProducts(res.data.products)

        })
    }

    useEffect(()=>{
        getProducts()
    },[])

    return <div className="main">
        {
            products
            .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
            .map(product => <Link to={`/item/${product._id}`} key={product._id}><ProductItem product={product}/></Link>)
        }
        

    </div>
}

export default Main