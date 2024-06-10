

function SearchCreate({add_click ,search,setSearch}){



    const onHandlerSearch=(e)=>{
        setSearch(e.target.value)
    }

    return (
        <div className="searchCreate">
            <p>Customers</p>
            <div className="searchAdd ">
                <div>
                    <ion-icon name="search-outline"></ion-icon>
                    <input type="text" placeholder="Search Customer..." onChange={onHandlerSearch}/>
                </div>
                {/* <button onClick={add_click}>Add New Customer + </button> */}
            </div>
        </div>
    )
}

export default SearchCreate