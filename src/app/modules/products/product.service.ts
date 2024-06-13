import { TProducts } from "./product.interface";
import { productModel } from "./product.model";

//create product
const createProduct = async (product: TProducts) => {
  const result = await productModel.create(product);
  return result;
};

//get all products
const getAllProduct = async (searchTerm: string) => {
  if (searchTerm) {
    const result = await productModel.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    return result;
  } else {
    const result = await productModel.find();
    return result;
  }
};

//get single product
const getSingleProduct = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};



//update product
const updateProductById = async (id: string, productData: TProducts) => {
  const updatedProduct = await productModel.findByIdAndUpdate(id, productData, {
    new: true,
  });
  if (updatedProduct) {
    return { product: updatedProduct, update: true };
  } else {
    return { updated: false };
  }
};

// delete product
const deleteProductById = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductById,
  deleteProductById,
};
