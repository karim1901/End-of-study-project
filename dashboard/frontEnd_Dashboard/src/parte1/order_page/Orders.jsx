import { useContext, useEffect, useState } from "react"
import NavCards from "./NavCards"
import OrderItem from "./components/orderItem"
import { productContext } from "../../context/productContext"

function Orders(){

    const order = useContext(productContext)

    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        order.getOrders("newOrder")
        setLoading(true)
    },[])




    return !loading ? <p>wait..........</p> : <div className="orders">
            <p>Orders</p>

            <NavCards/>
            
            <div className="ListOrder">
                {
                    order.orders.map(item => {
                        return (
                            item.product.map(product => <OrderItem key={product._id} status={"newOrder"} button={"Confirm"} customer={item.client} product={product} item={item}  />)
                        )
                    })
                }

            </div>
        </div>
    
}

export default Orders