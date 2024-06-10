import { useState } from "react"
import Click from "./components/click"
import Footer from "./components/footer"
import Header from "./components/header"
import Products from "./components/products"




function Main(){

    const [ page , setPage] = useState(1)

    return <div className="main">
        <Header/>
        <Click/>
        <Products page={page}/>
        <Footer setPage={setPage}/>
    </div>
}


export default Main