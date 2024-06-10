import { useProduct } from "../../../../../../productContext/productContext"





function Header(){

    const product = useProduct()

    return <div className="header">
        <p>There are {product.numberProduct} products</p>
        <div className="info">
            <div className="sort">
                <label htmlFor="">Sort By:</label>
                <select name="" id="">
                    <option value="">Recommend</option>
                    <option value="">Popular</option>
                    <option value="">Top rated</option>
                    <option value="">Low to high price</option>
                    <option value="">High to low price</option>
                </select>            
            </div>
            <div className="page">
                <label htmlFor="">Items On Page:</label>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
            </div>


            <div className="show">
                <ion-icon name="list-outline"></ion-icon>
                <ion-icon name="apps-outline"></ion-icon>
            </div>            
        </div>


    </div>
}


export default Header