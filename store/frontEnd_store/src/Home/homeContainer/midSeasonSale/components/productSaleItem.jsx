import heels from '../../suggestions/components/img/heels.jpeg'




function ProductSaleItem({product}){
    return <div className="productSaleItem">
        <div className="img">
            <img src={product.thumbnail} alt="" />
        </div>
        <div className="collection">
            <p>{product.category}</p>
            <s>{product.price+50} DH</s>
        </div>
        <div className="info">
            <p>{product.title}</p>
            <strong>{product.price}</strong>
        </div>

    </div>
}


export default ProductSaleItem