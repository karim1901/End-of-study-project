
import bgProd from './components/img/bg.jpg'
import HeaderMain from "./components/headerMain"
import { useState } from 'react'
import {useParams} from "react-router-dom"
import { useEffect } from 'react'
import axios from "axios"





function Store(){

    const [store , setStore] = useState({})


    const {id} = useParams()

    const getdata = ()=>{
        axios.get(`http://localhost:8001/store/${id}`).then(res => {
            // console.log(res.data.store)
            setStore(res.data.store)
        })
    }

    useEffect(()=>{
        getdata()
    },[])


    // useEffect(()=>{console.log(store)},[store])



    return <div className="store">

        {!!store.background && <img src={store.background} alt="" className='storeBG'/>}

        <HeaderMain store={store} getdata={getdata} />


    </div>
}

export default Store