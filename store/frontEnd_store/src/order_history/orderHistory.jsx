import Items from "./components/items"
import MyProfile from "./components/myProfile"
import Order from "./components/order"





function OrderHistory(){
    return <div className="orderHistory">
        <MyProfile/>
        <Order/>
        <Items/>
    </div>
}

export default OrderHistory