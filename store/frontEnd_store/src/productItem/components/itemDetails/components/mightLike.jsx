


import { useEffect } from "react"
import { arrowLeft, arrowright } from "../../../../icon"
import { useProduct } from "../../../../productContext/productContext"
import ItemLike from "./itemLike"
import ItemSimilar from "./itemSimilar"
import { Link } from "react-router-dom"






function MightLike(){

    const product = useProduct()

    useEffect(()=>{
        product.getProductsCatalog()
    },[])


    return <div className="mightLike">
        <div className="header">
            <p>Similar Items</p>
            <div className="arrow">
                {arrowLeft}
                {arrowright}
            </div>
        </div>
        <div className="like">
            
            {
                product.productsCatalog.map((item)=><Link key={item._id} to={`/item/${item._id}`}><ItemLike  product={item}/></Link>)
            }
            
        </div>
    </div>
}


export default MightLike