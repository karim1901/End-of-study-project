import { useEffect } from "react"
import { useProduct } from "../productContext/productContext"
import Article from "./components/article"
import Item from "./components/item"
import Order from "./components/order"






function MyCart(){

    const product = useProduct()

    useEffect(()=>{
        product.getProductsCatalog()
    },[])

    


    return <div className="myCart">
        <div className="title">
           <p>Shopping Cart</p> 
        </div>
        
        <div className="allArticles">
            <Article/>
            <Order/>
        </div>

        <div className="recommend">
            <h2>Recommended Products</h2>
            <div className="products">
                {
                    product.productsCatalog.map(item => <Item key={item._id} product={item}/>)
                }
                
            </div>
        </div>
    </div>
}

export default MyCart