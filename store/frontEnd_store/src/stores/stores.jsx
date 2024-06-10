import { useState } from "react"
import HeaderStores from "./components/header"
import MainStores from "./components/main"







function Stores(){

    const[search,setSearch] = useState('')

    return <div className="stores">
        <HeaderStores search={search}  setSearch={setSearch} />
        <MainStores search={search}/>
    </div>
}



export default Stores