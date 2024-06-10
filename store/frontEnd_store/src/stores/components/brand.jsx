
import logo from './logos/logo.jpg'
import { svgStore } from "../../icon";
import { useState } from 'react';



function Brand({store}){

    const name = store.name.charAt(0).toUpperCase() + store.name.slice(1);


    return <div className="brand">
        <div className="profile">
            {!!store.profile ? (
                <div className="logo">
                    <img src={store.profile}  alt='' />
                </div>
            ) : (
                <div className="icon">
                    {svgStore}
                </div>  
            )}
        </div>
        
        <div className="name">
            <p>{name}</p>
            <p>{store.followors} Followers</p>
        </div>
    </div>
}


export default Brand