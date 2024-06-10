import React from "react";

function Card({icon,count,title}){
    return <div className="card">
        <div>
            <p>{title}</p>
            {icon}
        </div>
        <p>{count}</p>
    </div>
}


export default Card