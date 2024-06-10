
function Header({type,full_view}){
    return(
        <div className="header">
            <p>{type} Employee</p>
            <button onClick={full_view}>
                <p>See Full View </p>
                <ion-icon name="arrow-forward-outline" role="img" class="md hydrated"></ion-icon>
            </button>
        </div>
    )
}

export default Header;