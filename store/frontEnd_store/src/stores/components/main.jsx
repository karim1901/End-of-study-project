import { useEffect } from "react";
import Brand from "./brand";
import axios from "axios"
import { useState } from "react";
import {Link} from "react-router-dom"




function MainStores({search}){

    const [stores ,setStores] = useState([])

    const getStores = ()=>{
        axios.get("http://localhost:8001/store").then((res)=>{
            setStores(res.data.stores)
        })
    }

    useEffect(()=>{
        getStores()
    },[])

    return <div className="main">
        {
            stores
            .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            .map(store => <Link to={`/store/${store.marchent}`} key={store._id}><Brand store={store} /></Link>)
        }
        
    </div>
}

export default MainStores