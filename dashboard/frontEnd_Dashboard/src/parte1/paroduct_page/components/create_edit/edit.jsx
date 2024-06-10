import Choose from "./choose"
import FormProduct from "./formProduct"
import Header from "./header"


function Edit({onclick2,active,setImg,img,setActive,title ,infoProduct,setInfoProduct,confirm}){

    return (
        <div className="edit">
            <Header onclick2 = {onclick2} title={title} />
            <Choose active={active} />
            <FormProduct onclick2={onclick2} confirm={confirm} img={img} setImg={setImg} active={active} setActive={setActive} infoProduct={infoProduct} setInfoProduct={setInfoProduct}  />
        </div>
    )
}


export default Edit