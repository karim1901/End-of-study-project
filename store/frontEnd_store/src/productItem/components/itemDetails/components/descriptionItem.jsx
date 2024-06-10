import { useEffect } from 'react'
import { useProduct } from '../../../../productContext/productContext'
import { useParams } from 'react-router-dom'







function DescriptionItem(){

    const product = useProduct()


    const {id} = useParams()

    useEffect(()=>{
        product.getProduct(id)
    },[])

    return  <div className="descriptionItem">
        <div className="imgItem">
            <img src={product.product.thumbnail} alt="" />
        </div>
        <div className="descSpec">
            <div className="desc">
                <h4>Description:</h4>
                <p>- {product.product.description}</p>
            </div>
        </div>
    </div>
}



export default DescriptionItem