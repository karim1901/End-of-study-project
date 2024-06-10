
import baby from '../../../../../../Home/homeContainer/category/img/baby.jpeg'






function ProductItem({product}){
    return <div className="productItem">
        <div className="item">
            <div className="img">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="collection">
                <p>{product.category}</p>
                <s>{product.price+50} DH</s>
            </div>
            <div className="info">
                <p>{product.title}</p>
                <strong>{product.price} DH</strong>
            </div>            
        </div>
    </div>
}


export default ProductItem