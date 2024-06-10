// import { iconDelete, iconStore } from "../../icon"
// import electronic from '../../Home/homeContainer/category/img/accessories.jpeg'
import { useProduct } from "../../productContext/productContext"
import { useEffect } from "react"
// import { useParams } from "react-router-dom"
import ProductItem from "./productItem"
import { useAuth } from "../../auth/authContext"







function Article(){

    const { cart, get_cart } = useProduct()
    const auth = useAuth()

    // useEffect(()=>{
    //     if(auth.user)
    //         product.get_cart(auth.user._id)
    // },[auth.user])

    useEffect(() => {
        if (auth.user) get_cart(auth.user._id);
    }, [auth.user]);

    

    return <div className="article">
        <h3>ALL ARTICLES</h3>
        
        {
        cart.map(item => (
                <ProductItem key={item._id} product={item} />
        ))
        }


    </div>
}



export default Article