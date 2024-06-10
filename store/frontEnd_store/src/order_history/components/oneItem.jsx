




function OneItem({product}){

    return <div className="oneItem">
        <div className="item">
            <div className="img">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="collection">
                <p>{product.category}</p>
                <s>{product.price + 50} DH</s>
            </div>
            <div className="info">
                <p>{product.title}</p>
                <strong>{product.price} DH</strong>
            </div>             
        </div>
 
    </div>
}



export default OneItem