import { error } from "console";
import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const result = await productService.createProduct(productData);

    res.status(200).json({
      success: true,
      message: "Product created successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product creation failed !",
      error: err,
    });
  }
};



export const productsControllerAll = {
    createProduct,
    // getAllProduct,
    // getSingleProduct,
    // updateProduct,
    // deleteProduct,
};
