

function SearchCreate({add_click,setSearch}){

    const onHandlerChange=(e)=>{
        setSearch(e.target.value)
    }

    return (
        <div className="searchCreate">
            <p>Employees</p>
            <div className="searchAdd ">
                <div>
                    <ion-icon name="search-outline"></ion-icon>
                    <input type="text" placeholder="Search Employee..." onChange={onHandlerChange}/>
                </div>
                <button onClick={add_click}>Add New Employee + </button>
            </div>
        </div>
    )
}

export default SearchCreate;