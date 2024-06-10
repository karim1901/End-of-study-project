import watch from './img/watch.jpeg'





function ProductItem({product}){
    return <div className="productItem">
        <div className="img">
            <img src={product.thumbnail} alt="" />
        </div>
        <div className="collection">
            <p>{product.category}</p>
            <s>{product.price +50} DH</s>
        </div>
        <div className="info">
            <p>{product.title}</p>
            <strong>{product.price} DH</strong>
        </div>

        <div className="hover">
            <ion-icon name="eye-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="cart-outline"></ion-icon>
        </div>
    </div>
}


export default ProductItem