
import baby from '../../Home/homeContainer/category/img/baby.jpeg'





function ProductItem({product}){
    return <div className="productItem">
        <div className="product">
            <div className="imgProduct">
                <img src={product.thumbnail} alt="" />
            </div>

            <div className="collection">
                <p>{product.category}</p>
                <s>{product.price+50} Dh</s>
            </div>
            <div className="info">
                <p>{product.title}</p>
                <strong>{product.price} DH</strong>
            </div> 
        </div>
    </div>
}


export default ProductItem