import { useEffect } from "react"
import { useProduct } from "../../../../productContext/productContext"
import ProductItem from "./productItem"
import {Link} from "react-router-dom"




function Products({counter, setCounter}){

    const product = useProduct()

    useEffect(()=>{
        product.getProductsHome(counter)
        // console.log(counter)
    },[counter])

    // console.log(product.count)
    // if(product.count){
    //     setCounter(1)
    // }

    // console.log(product.productsCatalog)

    return <div className="products">
        {
            product.productsCatalog.map(item=><Link to={`/item/${item._id}`} key={item._id}><ProductItem product={item}/></Link>)
        }

    </div>
}

export default Products