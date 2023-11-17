const Products = require('../models/assesment.model');

//!  1.Create an api to create a product
let addProduct=async (req,res,next)=>
{
    try{

        let {productId,productName,productCategory,image,productDescription}=req.body

        let {value,error}=assesmentSchema.validate({productId,productName,productCategory,image,productDescription})

        if(error){
            return res.status(400).json({error:true,message:error.message})
        }
        else
        {
            let product=await Products.create(value)
            res.status(201).json({message:"Product Added Successfully",data:product})
        }
    }
    catch(err)
    {
        next(err)
    }
}

//! 2.Create an api to fetch a product by product id
let getProductByID=async (req,res,next)=>
{
    try{
        let {pid}=req.params

    let singleProduct= await Products.findById(pid);

    if(!singleProduct)
    {
        return res.status(404).json({error:true,message:`No Products Found with given ID ${pid}`, data:null})
    }
        return res.status(200).json({error:false,message:"Product Fetched Successfully",data:singleProduct})
    }
    catch(err)
    {
        next(err);
    }
}

//! 3.Create an api to fetch all products with filters and pagination
let getProducts = async (req, res, next) => {
    try
    {
      let {page,limit,productName,productCategory}=req.query;

      let queryObject={}

      if(productName)
      {
          queryObject.productName=productName
      }
      if(productCategory)
      {
          queryObject.name={$regex:productCategory,$options:"i"}
      }

      let allProducts =Products.find(queryObject);

        let newPage=page || 1;
        let newLimit=limit || 4;
        let newskip=(newPage-1)*newLimit

        allProducts=await allProducts.skip(newskip).limit(newLimit)
        res.status(200).json({count:allProducts.length,error: false, message: "Products Fetched Successfully", data: allProducts })
    }
    catch(err)
    {
      next(err)
    }
  }

//! Create an api to delete a product by id
let deleteProduct=async(req,res,next)=>{

    let {pid}=req.params
    let singleProduct= await Products.findById(pid)

    if(!singleProduct)
    {
        return res.status(404).json({error:true,message:`No Students Found with given ID ${pid}`, data:null})
    }

    let deletedProduct=await Products.findOneAndDelete({id:pid})
    res.status(200).json({error:false,message:`Student Deleted Successfully`,data:deletedProduct})
}


module.exports = {addProduct,getProductByID,getProducts,deleteProduct}