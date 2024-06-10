import React, { useEffect, useState } from "react";
import InfoForm from "./infoForm";
import ToEmployee from "./toEmployee";

function FormProduct({active,setActive,img,setImg,infoProduct,setInfoProduct,confirm,onclick2}) {

  const [next,setNext]= useState(null)



  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImg(URL.createObjectURL(file))
      setInfoProduct({...infoProduct,
        thumbnail:file})
    }
  }



  return (
    <div className="formProduct">
      { next == null &&<div className="img">
        <input type="file" onChange={handleFileChange} />
        {img && <img src={img} alt="Preview" />}
      </div>}
      
      {next == null && <button className="btnNext" onClick={()=>setNext('nextInfo')}>
        <p>Next</p>
        <ion-icon name="arrow-forward-outline" role="img" class="md hydrated"></ion-icon>
      </button>}

      {next=='nextInfo' && <InfoForm onclick2={onclick2} confirm={confirm} setNext={setNext}  active={active} setInfoProduct={setInfoProduct} infoProduct={infoProduct}  setActive={setActive}/>}


      {next=='nextEmp' && <ToEmployee setNext={setNext} confirm={confirm} active={active} setActive={setActive}  setInfoProduct={setInfoProduct} infoProduct={infoProduct}/>}



      
      

    </div>
  );
}

export default FormProduct;
