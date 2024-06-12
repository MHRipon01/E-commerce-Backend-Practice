import { Response } from "express";
import { TProducts } from "./product.interface";
import { productModel } from "./product.model";


//create product 
const createProduct = async (product:TProducts) => {
    const result = await productModel.create(product)
    return result;
}

//get all products
const getAllProduct = async(req:Request , res:Response) =>{
try{

}catch(error){
    res.status(400).json({
        success: false,
        message: 'Failed to fetch all products!',
        error: error,
    })

}
}






export const productService = {
    createProduct,
    
}