"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_model_1 = require("./product.model");
//create product
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(product);
    return result;
});
//get all products
const getAllProduct = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const result = yield product_model_1.productModel.find({
            name: { $regex: searchTerm, $options: "i" },
        });
        return result;
    }
    else {
        const result = yield product_model_1.productModel.find();
        return result;
    }
});
//get single product
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findById(id);
    return result;
});
//update product
const updateProductById = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield product_model_1.productModel.findByIdAndUpdate(id, productData, {
        new: true,
    });
    if (updatedProduct) {
        return { product: updatedProduct, update: true };
    }
    else {
        return { updated: false };
    }
});
// delete product
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndDelete(id);
    return result;
});
exports.productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProductById,
    deleteProductById,
};
