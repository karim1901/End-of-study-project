import { useEffect } from "react"
import { arrowLeft, arrowright } from "../../icon"
import { useProduct } from "../../productContext/productContext"
import OneItem from "./oneItem"
import { Link } from "react-router-dom"



function Items(){

    const product = useProduct()

    useEffect(()=>{
        product.getProductsCatalog()
    },[])

    return <div className="items">

        <div className="header">
            <p>What About This?</p>
            <div className="arrow">
                {arrowLeft}
                {arrowright}
            </div>
        </div>
        <div className="similar">

            {
                product.productsCatalog.map(item=>{
                    return <Link key={item._id} to={`/item/${item._id}`}><OneItem  product={item} /></Link>
                })
            }

        </div>
    </div>
}


export default Items