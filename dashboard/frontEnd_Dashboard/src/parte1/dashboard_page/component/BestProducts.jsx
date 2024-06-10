import React from "react";
import BestProductList from "./BestProductList";


function BestProducts({bestProduct}){
    return <div className="bestProducts">
        <p>The Best Products</p>
        <BestProductList bestProduct={bestProduct}/>
    </div>
}

export default BestProducts