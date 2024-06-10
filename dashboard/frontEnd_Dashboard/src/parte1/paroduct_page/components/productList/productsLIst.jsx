import React from "react";
import ProductItem from "./productsItem";

function ProductsList({onshow,productsData,onSearch,searchCategory}){




    return(
        <div className="productsList">
{/* 
            {
            productsData
            .filter(product=>product.title.toLowerCase().includes(onSearch.toLowerCase()))
            .filter(product=>product.category.toLowerCase().includes(searchCategory.toLowerCase()))
            .map(product => <ProductItem product={product} key={product.id} onshow={onshow} />)
            } */}
            {
            productsData
              .filter(product => product.title.toLowerCase().includes(onSearch.toLowerCase()))
              .filter(product => product.category.toLowerCase().includes(searchCategory.toLowerCase()))
              .map(product => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onshow={onshow}
                />
              ))
          }


            

        </div>
    )
}

export default ProductsList