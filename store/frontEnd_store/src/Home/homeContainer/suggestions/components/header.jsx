import { Link } from "react-router-dom"
import { arrowLeft, arrowright } from "../../../../icon"




function Header({counter , setCounter}){

    const handleClick = (action)=>{
        if(action == "inc"){
            setCounter(counter+1)
        }else if(action == "dec"){
            if(counter > 1){
                setCounter(counter-1)
            }
        }
    }

    return <div className="header">
        <div className="ad">
            <div className="sug">
                <h3>You'll Love This</h3>
                <Link to={'catalog'}>View Products</Link>
            </div>
            <p>We've picked few pieces we're pretty sure you'll love.</p>
        </div>
        <div className="nextBack">

            <span onClick={()=>{handleClick('dec')}}>{arrowLeft}</span>
            <span onClick={()=>{handleClick('inc')}}>{arrowright}</span>
            

        </div>
    </div>
}

export default Header