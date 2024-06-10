import { iconCart, iconHeart,  iconUser } from "../../../icon"
import {  NavLink, useLocation } from "react-router-dom";
import { useProduct } from "../../../productContext/productContext";






function Nav(){

    const {cart} = useProduct()
    const location = useLocation();

    // Check if the current route is the cart page
    const isCartPage = location.pathname === '/cart';

    return <div className="nav">
        <div className="navbar">
            <div className="logo">
                <div className="dot">
                    <p>.com</p>
                </div>
                <p>ZenithOutlet</p>
            </div>
            <div className="menu">
                <ul>
                    <NavLink to='/' activeclassname="active">
                    <li>
                        <p>Home</p>
                    </li>
                    </NavLink>
                    <NavLink to='/catalog' activeclassname="active">
                        <li>
                            <p>Catalog</p>
                        </li>
                    </NavLink>
                    <li><p>Shorts</p></li>
                    <NavLink to='/stores' activeclassname="active">
                        <li>
                            <p>Stores</p>
                        </li>
                    </NavLink>
                    
                    <NavLink to="/merchant">
                        <li>ZenithBusiness</li>
                    </NavLink>
                </ul>
            </div>
            <div className="icon">
                <ul>
                    <li>{iconHeart}</li>
                    <NavLink to='/orderHistory'>
                        <li>{iconUser}</li>
                    </NavLink>
                    <NavLink to='/cart'>
                        <li className="iconCart">
                            {iconCart}
                            {cart.length > 0 && !isCartPage && <div className="cartFull"></div>}
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>

    </div>
}


export default Nav