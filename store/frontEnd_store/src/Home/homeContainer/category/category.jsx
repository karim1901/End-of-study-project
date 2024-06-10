import home from './img/home.jpeg'
import men from './img/men.jpeg'
import women from './img/women.jpeg'
import baby from './img/baby.jpeg'
import electronic from './img/electronic.jpeg'
import accessories from './img/accessories.jpeg'
import axios from "axios"
import { useProduct } from '../../../productContext/productContext'
import { Link } from 'react-router-dom'




function Category(){


    const product = useProduct()

    


    return <div className="category">

        <div className="CAT">
            <div className="cat" name="watches">
                <Link to={`/catalog`}  onClick={(e)=>{product.setSearchCategory("women")}}>
                    <img src={women} alt="" />
                    <p>Women</p>
                </Link>
            </div>
            <div className="cat">
                <Link to={`/catalog`}  onClick={(e)=>{product.setSearchCategory("men")}}>
                    <img src={men} alt="" />
                    <p>Men</p>
                </Link>
            </div>
            <div className="cat">
                <Link to={`/catalog`}  onClick={(e)=>{product.setSearchCategory("baby")}}>
                    <img src={baby} alt="" />
                    <p>Baby</p>
                </Link>
            </div>
            <div className="cat">
                <Link to={`/catalog`}  onClick={(e)=>{product.setSearchCategory("electronic")}}>
                    <img src={electronic} alt="" />
                    <p>Electronic</p>
                </Link>
            </div>
            <div className="cat">
                <Link to={`/catalog`}  onClick={(e)=>{product.setSearchCategory("home")}}>
                    <img src={home} alt="" />
                    <p>Home</p>
                </Link>
            </div>
            <div className="cat">
                <Link to={`/catalog`}  onClick={(e)=>{product.setSearchCategory("accessories")}}>
                    <img src={accessories} alt="" />
                    <p>Accessories</p>
                </Link>
            </div>

            
            <ion-icon name="arrow-forward-outline"></ion-icon>
            
        </div>




    </div>
}


export default Category;