import electronic from '../../../../Home/homeContainer/category/img/electronic.jpeg'








function ItemSimilar({product}){
    return <div className="itemSimilar">
        <div className="item">
            <div className="img">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="collection">
                <p>{product.category}</p>
                <s>{product.price+50},00 DH</s>
            </div>
            <div className="info">
                <p>{product.title}</p>
                <strong>{product.price},00 DH</strong>
            </div>             
        </div>
 
    </div>
}



export default ItemSimilar