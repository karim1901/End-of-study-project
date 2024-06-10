import { useState } from "react"
import Header from "./components/header"
import Products from "./components/products"



function Suggestion(){
    const [counter , setCounter] = useState(1)
    return <div className="suggestion">
        <Header counter={counter} setCounter={setCounter}/>
        <Products counter={counter} setCounter={setCounter} />
    </div>
}



export default Suggestion