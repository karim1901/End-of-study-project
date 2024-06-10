import { useEffect } from "react"


function InputItem({placeholder, setFocus ,title,value ,setInfoCustomers,infoCustomers }){

    useEffect(()=>{
        if(value != ''){
            setFocus(prev=>{
                return {
                    ...prev,
                    [placeholder]:placeholder
                }
            })
        }
    },[value])


    const onfocus=()=>{
        setFocus(prev=>{
            return {
                ...prev,
                [placeholder]:placeholder
            }
        })
    }

    const onblur=({target})=>{
        if(target.value == ''){
            setFocus(prev=>{
                return {
                    ...prev,
                    [placeholder]: ''
                }
            })
        }

    }

    const onchangeHandler=(e)=>{
        setInfoCustomers({
            ...infoCustomers,
            [e.target.name]: e.target.value
        }
            
        )
    }


    return(
        <div className="inputItem">
            <p className={title}>{placeholder}</p>
            <input type="text" onFocus={onfocus} onBlur={onblur} name={placeholder} value={value} onChange={onchangeHandler}/>
        </div>
    )
}

export default InputItem;