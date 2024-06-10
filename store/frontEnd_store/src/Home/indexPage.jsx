// import { Outlet } from "react-router-dom"
import Navbar from "./navbar/navbar"
import Home from "./homeContainer/home"
import Footer from "./footer/footer"
import { Outlet } from "react-router-dom"






function IndexPage(){
    

    return <div className="index">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
}


export default IndexPage