const Product = require('../models/productModel')




const get_products = (req,res)=>{

    const page = req.query.page

    const limit = 20

    const skip = (parseInt(page) - 1) * limit;

    console.log(page)



    Product.find({}).skip(skip).limit(limit).sort({ createdAt: -1 }).then((result)=>{
        Product.find({}).countDocuments().then((r)=>{
            res.json({products:result , count:r})
        })
    }).catch((err)=>{
        res.json({message:err})
    })
}

const get_products_last = (req,res)=>{

    Product.find({}).sort({ createdAt: 1 }).limit(12).then((result)=>{
        res.json({products:result})
    }).catch((err)=>{
        res.json({message:err})
    })
}

const get_products_home = (req,res)=>{

    const page = req.query.page

    const limit = 6

    const skip = (parseInt(page) - 1) * limit;


    Product.find({}).skip(skip).limit(limit).sort({ createdAt: -1 }).then((result) => {
        if (result.length === 0) {
            console.log(result.length,"page",page)
            return Product.find({}).limit(limit).sort({ createdAt: -1 })
        } else {
            return result
        }
    })
    .then((result) => {
        res.json({ products: result })
    })
    .catch((err) => {
        res.json({ message: err.message })
    });

}

const get_products_by_merchant = (req,res)=>{
    Product.find({marchent:req.params.id}).sort({ createdAt: -1 }).then((result)=>{
        res.json({products:result})
    }).catch((err)=>{
        res.json({message:err})
    })
}


const get_product = (req,res)=>{
    // res.json({product:req.params.id})

    Product.findById(req.params.id).then((result)=>{
        res.json({product:result})
    }).catch((err)=>{
        res.json({message:err})
    })

}


const get_product_by_Category = async (req,res)=>{

    // console.log(req.query)
    
    Product.find({category:req.query.category}).sort({ createdAt: -1 }).then((result)=>{
        res.json({products:result})
        
    }).catch((err)=>{
        res.json(err)
    })
}


const best_products = (req,res)=>{
    Product.find({}).sort({ number_confirmed: 1 }).limit(12).then((result)=>{
        res.json({products:result})
    }).catch((err)=>{
        res.json({message:err})
    })
}

module.exports = {
    get_products,
    get_products_by_merchant,
    get_product,
    get_product_by_Category,
    get_products_home,
    get_products_last,
    best_products
}