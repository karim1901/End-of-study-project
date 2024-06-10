import { useEffect } from "react"
import { arrowLeft, arrowright } from "../../../../icon"
import { useProduct } from "../../../../productContext/productContext"
import ItemSimilar from "./itemSimilar"
import { Link } from "react-router-dom"






function SimilarItems(){

    const product = useProduct()

    useEffect(()=>{
        if(!product.product.category)
            return


        product.get_product_by_Category(product.product.category)

    },[product.product])

    return <div className="similarItems">
        <div className="header">
            <p>Similar Items</p>
            <div className="arrow">
                {arrowLeft}
                {arrowright}
            </div>
        </div>
        <div className="similar">
            {
                product.productsCategory.map(item=><Link  key={item._id} to={`/item/${item._id}`}><ItemSimilar product={item}/></Link>)
            }
            
        </div>
    </div>
}


export default SimilarItems