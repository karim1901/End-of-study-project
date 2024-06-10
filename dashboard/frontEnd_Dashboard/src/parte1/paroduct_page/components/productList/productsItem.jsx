import React from "react";

function ProductItem({product,onshow}){
    return (
        <div className="productItem" name="edit"  onClick={(e)=>{onshow(e,product)}} >
            <div className="img" >
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="title"  >
                <p >{product.title}</p>
                <p >{product.price},00 DH</p>
            </div>
            <div className="info" >
                <p >Stock : {product.stock}</p>
                <p >Sold : 232</p>
            </div>
        </div>
    )
} 

export default ProductItem