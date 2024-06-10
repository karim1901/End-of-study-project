import React, { useRef, useState,useEffect } from "react";
import SearchCreate from "./components/productList/searchCreate";
import Category from "./components/productList/category";
import ProductsList from "./components/productList/productsLIst";
import Edit from "./components/create_edit/edit";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../auth/authContext";



function Products(){

    const[onSearch,setOnSearch]=useState('')

    const[searchCategory,setSearchCategory]=useState('')

    const [productsData ,setProductsData] = useState([])


    const products = useRef(null)
    const [showEdit,setShowEdit] = useState(null)


    const auth = useAuth()

    // console.log(auth.user)

    
    const [infoProduct,setInfoProduct] =useState({
        id:"",
        marchent:auth.user._id,
        thumbnail:'',
        title:'',
        description:'',
        category:'',
        stock:'',
        pricePurchase:'',
        priceTaxes:'',
        price:'',
        employee:''
    })

    const [img, setImg] = useState('');


    const [active,setActive] = useState({
        infoProduct:"active",
        employee:""
        
    })

    const onclick1 = (e)=>{
        setShowEdit(e.currentTarget.getAttribute('name'))
        products.current.classList.remove('active');


    }

    const onclick2 = ()=>{
        setShowEdit(null)

        products.current.classList.add('active');

        setInfoProduct({
            id:"",
            marchent:auth.user._id,
            thumbnail:'',
            title:'',
            description:'',
            category:'',
            stock:'',
            pricePurchase:'',
            priceTaxes:'',
            price:'',
            employee:''
        })
        setImg('')

    }



    useEffect(()=>{
        getData()
    },[productsData])


    const getData = async ()=>{
        const resp = await axios.get(`http://127.0.0.1:8001/product/${auth.user._id}`)
        // console.log(resp)
        setProductsData(resp.data.products)
    }

    
    const send_data = async()=>{
        axios.post('http://127.0.0.1:8001/product',infoProduct,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((res)=>{
            console.log(res)
        })

        setInfoProduct({
            id:"",
            marchent:auth.user._id,
            thumbnail:'',
            title:'',
            description:'',
            category:'',
            stock:'',
            pricePurchase:'',
            priceTaxes:'',
            price:'',
            employee:''
        })
        onclick2()

        getData()

    }




    const update_product = async()=>{

        console.log(infoProduct)
        
        axios.put(`http://127.0.0.1:8001/product/${infoProduct.id}`,infoProduct,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((res)=>{
            console.log(res)
        })

        setInfoProduct({
            id:"",
            marchent:auth.user._id,
            thumbnail:'',
            title:'',
            description:'',
            category:'',
            stock:'',
            pricePurchase:'',
            priceTaxes:'',
            price:'',
            employee:''
        })
        getData()
    }

    const onshow=(e,product)=>{
        onclick1(e) 
        
        setInfoProduct({...product,id:product._id})
        setImg(product.thumbnail)
    }

    return (
        <div className="productsContainer">
            <div ref={products} className='products active'>
                <SearchCreate onclick1={onclick1} onSearch={onSearch} setOnSearch={setOnSearch} />
                <Category searchCategory={searchCategory} setSearchCategory={setSearchCategory} productsData={productsData}/>
                <ProductsList searchCategory={searchCategory} onSearch={onSearch} productsData={productsData} onshow={onshow} />
            </div>

            {showEdit === 'create' ? (
                <Edit confirm={send_data} infoProduct={infoProduct} img={img} setImg={setImg} setInfoProduct={setInfoProduct}  active={active} title={'Create Products'} setActive={setActive} onclick2={onclick2} />
            ) :(showEdit === 'edit'?
                <Edit confirm={update_product} infoProduct={infoProduct} img={img} setImg={setImg} setInfoProduct={setInfoProduct} active={active} title={'Edit Products'} setActive={setActive} onclick2={onclick2} />
             :null)}

           


        </div>
    )
}

export default Products