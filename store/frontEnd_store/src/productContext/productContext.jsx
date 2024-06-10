import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";
import { useAuth } from "../auth/authContext";
import { useEffect } from "react";



const productContext = createContext()



const ProductProvider = ({children})=>{

    const [productsCatalog ,setProductsCatalog] = useState([])
    const [product ,setProduct] = useState({})
    const [productsCategory ,setProductsCategory] = useState([])
    const [cart,setCart] = useState([])
    const [delivered , setDelivered] = useState([])
    const [count ,setCount]  =useState(false)
    const [search ,setSearch] = useState("")
    const [searchCategory,setSearchCategory] =useState('')
    const [numberProduct,setNumberProduct] = useState('')
    const [loading ,setLoading] = useState(false)

    const auth = useAuth()

    // useEffect(()=>{console.log(searchCategory)},[searchCategory])
    const getProductsCatalog = (page)=>{
        setLoading(false)
        axios.get(`http://localhost:8002/product/?page=${page}`).then((products)=>{
            setProductsCatalog(products.data.products)
            setNumberProduct(products.data.count)
            setLoading(true)
        })
    }


    const getProductsHome = (counter)=>{
        // setLoading(false)
        axios.get(`http://localhost:8002/product/catalog/home/?page=${counter}`).then((products)=>{
            setProductsCatalog(products.data.products)
            // console.log(products.data.products.length)
            // if(products.data.products.length < 6){
            //     console.log(products.data.products.length)
            //     setCount(true)
            // }
            //  console.log(products.data.products)
        })
    }

    const getProduct = (id)=>{
        // setLoading(false)
        axios.get(`http://localhost:8002/product/items/${id}`).then((product)=>{
            setProduct(product.data.product)
            setLoading(true)
        })
    }

    const get_product_by_Category = (category)=>{
        // setLoading(false)
        axios.get(`http://localhost:8002/product/category/?category=${category}`).then((product)=>{
            setProductsCategory(product.data.products)
        })
    }


    const get_cart = (id)=>{
        // setLoading(false)
        axios.get(`http://localhost:8002/cart/${id}`).then((data)=>{
            // console.log(data.data.cart)
            setCart(data.data.cart)
        })
    }

    const addTOCart = (data)=>{
        // setLoading(false)
        // console.log(data)
        axios.post(`http://localhost:8002/cart`,data).then((res)=>{
            console.log(res);
            get_cart(auth.user._id);
        })
    }

    const deleteFromCart = (id)=>{
        // setLoading(false)
        axios.delete(`http://localhost:8002/cart/${id}`).then((res)=>{
            // console.log(res)
            get_cart(auth.user._id)
        })
    }


    const add_order = (data)=>{
        // setLoading(false)
        axios.post(`http://localhost:8001/order`,data).then((res)=>{
            // console.log(res)
            deleteFromCart(data.id)
            get_cart(auth.user._id)
        })
    }

    const add_order_not_auth = (data)=>{
        // setLoading(false)
        axios.post(`http://localhost:8001/order`,data).then((res)=>{
            console.log(res)
            // deleteFromCart(data.id)
            // get_cart(auth.user._id)
        })
    }

    const get_order_customer = (id)=>{
        // setLoading(false)
        axios.get(`http://localhost:8001/order/orderCustomer/${id}/items`).then((orders)=>{
            setDelivered(orders.data.orders)
        })

    }

    const value = {
        productsCatalog,
        product,
        productsCategory,
        cart,
        delivered,
        count,
        search ,
        searchCategory,
        numberProduct,
        loading ,
        setLoading,
        setNumberProduct,
        setSearchCategory,
        setSearch,
        add_order,
        deleteFromCart,
        addTOCart,
        get_cart,
        getProductsCatalog,
        getProduct,
        get_product_by_Category,
        get_order_customer,
        getProductsHome,
        add_order_not_auth
    }

    return <productContext.Provider value={value}>
        {children}
    </productContext.Provider>
}



export default ProductProvider


export const useProduct = ()=>{
    return useContext(productContext)
}


