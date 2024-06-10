
import { useState } from 'react'
import { useProduct } from '../../../productContext/productContext'



function Choose(){

    const product = useProduct()

    const onhandlerSearch=(e)=>{
        product.setSearch(e.target.value)
    }


    return <div className="choose">
        <ul>
            <li>Home</li>
            <li>/</li>
            <li>Catalog</li>
            <li>/</li>
            <li>All items</li>
        </ul>

        <div className="search">
            <input type="text" value={product.search} onChange={onhandlerSearch} placeholder='What are you looking for?' />
            <button>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    </div>
}


export default Choose