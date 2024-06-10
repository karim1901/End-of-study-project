import React from "react";

function Header({onclick2,title}){
    return (
        <div className="header">
            <p>{title}</p>
            <button onClick={onclick2}>
                <p>See Full View </p>
                <ion-icon name="arrow-forward-outline" role="img" class="md hydrated"></ion-icon>
            </button>
        </div>
    )
}

export default Header