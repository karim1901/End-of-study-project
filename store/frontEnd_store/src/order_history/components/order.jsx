import { useEffect } from "react"
import { useProduct } from "../../productContext/productContext"
import OrderDetails from "./orderDetails"
import { useAuth } from "../../auth/authContext"





function Order(){

    const order = useProduct()
    const auth = useAuth()

    useEffect(()=>{
        if(auth.user)
            order.get_order_customer(auth.user._id)
    },[auth.user])
    



    return <div className="order">
        <h3>My Orders</h3>
        {
            order.delivered.map(item => {
                return <OrderDetails key={item._id} order={item} />
            })
        }
        
    </div>
}

export default Order