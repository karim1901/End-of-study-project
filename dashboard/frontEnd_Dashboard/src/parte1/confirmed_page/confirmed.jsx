import { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContext";
import NavCards from "../order_page/NavCards";
import OrderItem from "../order_page/components/orderItem";

function Confirmed(){

    const order = useContext(productContext)

    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        order.getOrders("confirmed")
        setLoading(true)
    },[])

    return(
        <div className="confirmed">
            <p>Confirmed</p>

            <NavCards/>

            <div className="ListOrder">
            {
                order.orders.map(item => {
                    return (
                        item.product.map(product => <OrderItem key={product._id} status={"confirmed"} button={"delivred"} customer={item.client} product={product} item={item}  />)
                    )
                })
            }
            </div>
        </div>
    )
}

export default Confirmed;