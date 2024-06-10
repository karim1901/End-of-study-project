import { useEffect, useRef } from "react"


function InputItem({value,name,onblur,onfocus,setFocus,onchngeInput}){

    const inp =useRef()

    useEffect(()=>{

        if (value != "") {
            setFocus(prev =>{
                return {
                    ...prev,
                    [name]:name
                }
            })
        }

    },[value])


    return (
         <input type="text" value={value} name={name} onBlur={onblur}  onChange={onchngeInput} onFocus={onfocus} ref={inp}/>
    ) 
}

export default InputItem


