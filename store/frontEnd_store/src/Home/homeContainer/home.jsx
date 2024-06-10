import BestSellerProduct from "./bestSellerProduct/bestSellerProduct"
import Category from "./category/category"
import ImgCategory from "./imgCategory/imgCategory"
import MidSeasonSale from "./midSeasonSale/midSeasonSale"
import MidSale from "./salePub/midSale"
import Sale from "./salePub/sale15"
import SalePub from "./salePub/salePub"
import Shipping from "./shipping/shipping"
import Suggestion from "./suggestions/suggestion"



function Home(){
    return <div className="homeContainer">
        <ImgCategory/>
        <Category/>
        <Suggestion/>
        <SalePub/>
        <Shipping/>
        <BestSellerProduct/>
        <MidSale/>
        <MidSeasonSale/>
        <Sale/>
    </div>
}


export default Home