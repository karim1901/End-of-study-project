import Shipping from "../Home/homeContainer/shipping/shipping"
import Choose from "./components/choose"
import MightLike from "./components/itemDetails/components/mightLike"
import SimilarItems from "./components/itemDetails/components/similarItems"
import ItemDetails from "./components/itemDetails/itemDetails"






function ItemProduct(){
    
    return <div className="itemProduct">
        <Choose/>
        <ItemDetails/>
        <SimilarItems/>
        <MightLike/>
        <Shipping/>
    </div>
}


export default ItemProduct