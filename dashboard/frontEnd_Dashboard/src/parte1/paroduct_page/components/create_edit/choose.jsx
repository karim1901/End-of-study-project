import React from "react";

function Choose({active}){
    return (
        <div className="choose">
            <button className={active.infoProduct}>Product Informations</button>
            <button className={active.employee}>Employee</button>
        </div>
    )
}

export default Choose