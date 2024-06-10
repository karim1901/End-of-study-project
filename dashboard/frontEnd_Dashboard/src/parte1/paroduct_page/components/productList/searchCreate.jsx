import React from "react";


function SearchCreate({onclick1,onSearch,setOnSearch}){

    
    const handlerchange =(e)=>{
        setOnSearch(e.target.value)
    }



    return (
        <div className="searchCreate">
            <p>Products</p>
            <div className="searchAdd">
                <div>
                    <ion-icon name="search-outline"></ion-icon>
                    <input type="text" placeholder="Search Product..." onChange={handlerchange} value={onSearch}/>
                </div>
                <button name="create" onClick={onclick1}>Add New Product + </button>
            </div>

        </div>
    )
}

export default SearchCreate