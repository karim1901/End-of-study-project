import { useEffect, useState } from "react";
import { useProduct } from "../../productContext/productContext"



function ProductItem({product}){
    
    const [quantity, setQuantity] = useState(product.quantity);
    const PRODUCT = useProduct();

    useEffect(() => {
        setQuantity(product.quantity);
    }, [product.quantity]);

    const updateCartQuantity = (productId, newQuantity) => {
        const updatedCart = PRODUCT.cart.map(item =>
            item._id === productId ? { ...item, quantity: newQuantity } : item
        );
        PRODUCT.setCart(updatedCart);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        updateCartQuantity(product._id, quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateCartQuantity(product._id, quantity - 1);
        }
    };

    // const cancelArticle = () => {
    //     PRODUCT.deleteFromCart(product._id);
    //     if (PRODUCT.cart.length === 1) {
    //         setQuantity(0);
    //     }
    // };


    return <div className="details">
        <div className="img">
            <img src={product.product.thumbnail} alt="" />
        </div>
        <div className="div">
            <div className="descCancel">
                <div className="desc">
                    <p>{product.product.title}</p>
                    <p>{product.product.description}</p>
                </div>
                <div className="cancel" onClick={()=>{PRODUCT.deleteFromCart(product._id)}}>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
            <div className="price">
                <p>{product.product.price}.00 DH</p>
                <div className="add">
                    <button onClick={decrementQuantity}>-</button>
                    <p>{quantity}</p>
                    <button onClick={incrementQuantity}>+</button>
                </div>                        
            </div>   
            <div className="livraison">
                <p>Livraion gratuite</p>
            </div>             
        </div>

    </div>

}


export default ProductItem