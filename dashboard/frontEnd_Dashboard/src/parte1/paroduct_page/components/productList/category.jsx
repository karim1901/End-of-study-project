import React, { useRef } from "react";

function Category({productsData,searchCategory,setSearchCategory}){

    const onSearch_byCategory=(e)=>{
        setSearchCategory(e.target.getAttribute('name'))

        document.querySelectorAll('.category ul li').forEach(item => {
            item.classList.remove('active');
        });

        e.target.classList.add('active')

    }

    const all_products=()=>{
        setSearchCategory('')
    }
    return(
        <div className="category">
            <ul>
                <li className='active' onClick={all_products} >
                    <p>All Products</p>
                </li>
                
                {[...new Set(productsData.map(product => product.category))].map((category) => {
                    category = category.charAt(0).toUpperCase() + category.slice(1);
                    return <li key={category} name={category} onClick={onSearch_byCategory}>{category}</li>
                })}
                
            </ul> 

            <button>
                <p>Sort By</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none"><line y1="3.5" x2="12" y2="3.5" stroke="black"></line><path d="M2 7H6H10" stroke="black"></path><line x1="5" y1="10.5" x2="7" y2="10.5" stroke="black"></line></svg>
            </button>
        </div>
    )
}


export default Category