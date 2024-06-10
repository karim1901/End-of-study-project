import baby from '../../suggestions/components/img/baby.jpeg'





function BestProductItem({product}){
    return <div className="bestProductItem">
        <div className="notHover">
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


        <div className="hover">
            <div className="img">
                <img src={baby} alt="" />
            </div>
            <div className="desc">
                <p>Baby Collection</p>
                <p>Baby Suit</p>
                <div className="sale">
                    <small>SALE</small>
                    <small>-30%</small>                    
                </div>

                <s>$24.50</s>
                
                <div className="price">    
                    <strong>$18.00</strong>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                </div>
            </div>
        </div>
    </div>
}



export default BestProductItem