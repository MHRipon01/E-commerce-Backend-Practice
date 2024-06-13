import { productService } from "./product.service";
import { Request, Response } from "express";
import productValidationAllSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidationProductData =
      productValidationAllSchema.parse(productData);
    const result = await productService.createProduct(zodValidationProductData);

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

//get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    console.log(searchTerm);
    const result = await productService.getAllProduct(searchTerm ?? "");

    return res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term ' ${searchTerm} ' fetched successfully!`
        : "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch all products.",
      error: err,
    });
  }
};

//get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProduct(productId);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Product not found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something went wrong!",
      error: error,
    });
  }
};

//update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productInfo = req.body;
    const zodValidationProductData =
      productValidationAllSchema.parse(productInfo);
    const product = await productService.getSingleProduct(productId);
    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Product not found !",
      });
    }
    const result = await productService.updateProductById(
      productId,
      zodValidationProductData,
    );
    return res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product updated failed",
      error: error,
    });
  }
};

// delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteProductById(productId);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Product not found !",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product delete failed!",
      error: error,
    });
  }
};

export const productsControllerAll = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
