import { useEffect } from "react"
import { useProduct } from "../../../../../../productContext/productContext"
import ProductItem from "./productItem"
import {Link} from "react-router-dom"







function Products({page}){

    const product = useProduct()

    useEffect(()=>{
        product.getProductsCatalog(page)
    },[page])


    return <div className="products">

        {
            !product.loading ? <div className="containerLoader"><span class="loader"></span></div> : product.productsCatalog
            .filter(item => item.title.toLowerCase().includes(product.search.toLowerCase()))
            .filter(item => item.category.toLowerCase().includes(product.searchCategory.toLowerCase()))
            .map(item => <Link to={`/item/${item._id}`} key={item._id} ><ProductItem product={item}/></Link>)
        }


        
    </div>
}

export default Products