import { useContext, useEffect, useState } from "react";
import { pencil } from "../../icon";
import { productContext } from "../../../context/productContext";

function OrderItem({customer,product,item,status,button}){
    const[isDisabled,setIsDisabled]=useState(true)

    const order = useContext(productContext)

    const update_order = ()=>{
        if(status == "newOrder"){
            order.updateOrder({oldStatus:"newOrder",status:"confirmed",_id:item._id,marchent:item.marchent , quantity:item.quantity, idPro:item.product[0]._id,customer:customer})
        } else if(status == "confirmed"){
            order.updateOrder({oldStatus:"confirmed",status:"delivered",_id:item._id})
        }else if(status == "cancelling"){
            order.updateOrder({oldStatus:"cancelling",status:"confirmed",_id:item._id})
        }else{
            order.updateOrder({status:"delivered",_id:item._id})
        }

        // order.getOrders(status)
    }

    const deleteOrder = ()=>{
        order.updateOrder({status:"cancelling",_id:item._id})
        // order.getOrders(status)
    }

    const pencil_Click=()=>{
        setIsDisabled(!isDisabled)
    }

    
    return(
        <div className="orderItem">

            <div className="productInfo">
                <div className="img">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="info">
                    <p className="title">{product.title}</p>
                    <p className="price">{product.price} DH</p>
                    <p>Occupied by: {product.employee.firstName} {product.employee.lastName}</p>

                    <div className="dataButton">
                        <div className="dataQuantity">
                            <p>Data order : {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : 'Unknown'}</p>
                            <p>Quantity : {item.quantity} piece</p>
                        </div>
                        <div className="btns">
                            <button onClick={deleteOrder}>Cancel</button>
                            <button onClick={update_order}>{button}</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="customerInfo">
                <p>Information Customer</p>
                <span onClick={pencil_Click}>{pencil}</span>
                <div className="info">
                    <div className="name">
                        <label>Name  </label> 
                        :<input type="text" value={customer.fullName} disabled={isDisabled}/>
                    </div>
                    <div className="name">
                        <label>Phone      </label> 
                        :<input type="text" value={customer.phone} disabled={isDisabled}/>
                    </div>
                    <div className="name">
                        <label>City  </label> 
                        :<input type="text" value={customer.city} disabled={isDisabled}/>
                    </div>
                    <div className="name">
                        <label>Adresse  </label> 
                        :<input type="text" value={customer.adress} disabled={isDisabled}/>
                    </div>  
                </div>

            </div>
        </div>
    )
}

export default OrderItem;