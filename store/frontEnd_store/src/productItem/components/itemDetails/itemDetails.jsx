import { useProduct } from "../../../productContext/productContext"
import DescriptionItem from "./components/descriptionItem"
import PriceItem from "./components/priceItem"






function ItemDetails(){

    const product = useProduct()

    return <div className="itemDetails">
        <DescriptionItem/>
        <PriceItem/>
    </div>
}


export default ItemDetails