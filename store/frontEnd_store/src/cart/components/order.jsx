import { useEffect, useState } from "react"
import { useAuth } from "../../auth/authContext"
import { useProduct } from "../../productContext/productContext"




function Order(){
    const product = useProduct()

    const auth = useAuth()

    const [style ,setStyle] = useState({})


    useEffect(()=>{
        if(auth.user)
            setClient({
                fullName:`${auth.user.firstName} ${auth.user.lastName}`,
                phone:`${auth.user.phone}`,
                adress:'',
                city:''
            })
    },[auth.user])



    const [client,setClient] = useState({
        fullName:``,
        phone:``,
        adress:'',
        city:''
    })

    let total = 0
    product.cart.forEach(item =>{
        total += parseInt(item.product.price*item.quantity)
    })

    const add_order = ()=>{
        if(client.adress !== "" || client.city !== ""){
            product.cart.forEach(item =>{
                const data = {id:item._id,product:[item.product._id],marchent:item.product.marchent,customer:item.customer,client:client,quantity:item.quantity}
                product.add_order(data)
            })
        }else{
            setStyle({ border: '1px solid red' })
        }

    }

    const onHandler=(e)=>{
        setClient({
            ...client,
            [e.target.name] : e.target.value
        })
    }

    

    return <div className="orderInfo">
        <div className="infoClient">
            <p>DELIVERY ADDRESS</p>
            <div className="info">
                <input type="text" defaultValue={client.fullName} disabled={true} />
                <input type="text" defaultValue={client.phone}  disabled={true} />
                <input type="text" name="adress" placeholder="Adress" value={client.adress} onChange={(e)=>{onHandler(e)}} style={style} />
                <input type="text" name="city" placeholder="City" value={client.city} onChange={(e)=>{onHandler(e)}}  style={style}  />
            </div>
            {/* <button>Confirm</button> */}
        </div>

        <div className="order">
            <p>ORDER SUMMARY</p>
            <div className="total">
                <p>Total: </p> 
                <p>{total},00 DH</p>
            </div>
            <button onClick={add_order}> Checkout </button>
        </div>
    </div>
}

export default Order