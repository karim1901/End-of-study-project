



function OrderDetails({order}){

    const product = order.product[0];
    const title = product.title.charAt(0).toUpperCase() + product.title.slice(1);
    const description = product.description.charAt(0).toUpperCase() + product.description.slice(1);

    return <div className="orderDetails">
        <div className="img">
            <img src={order.product[0].thumbnail} alt="" />
        </div>
        <div className="desc">
            <div className="titlePrice">
                <div className="title">
                    <p>{title}</p>
                </div>
                <p>{order.product[0].price} DH</p>
            </div>
            <div className="description">
                <p>{description}</p>
                <button>{order.status}</button>
                <p>On: {new Date(order.createdAt).toLocaleString()}</p>
            </div>
        </div>
    </div>
}


export default OrderDetails