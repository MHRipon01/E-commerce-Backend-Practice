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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsControllerAll = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodValidationProductData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.productService.createProduct(zodValidationProductData);
        res.status(200).json({
            success: true,
            message: "Product created successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product creation failed !",
            error: err,
        });
    }
});
//get all product
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        console.log(searchTerm);
        const result = yield product_service_1.productService.getAllProduct(searchTerm !== null && searchTerm !== void 0 ? searchTerm : "");
        return res.status(200).json({
            success: true,
            message: searchTerm
                ? `Products matching search term ' ${searchTerm} ' fetched successfully!`
                : "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch all products.",
            error: err,
        });
    }
});
//get single product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.getSingleProduct(productId);
        if (result) {
            return res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: "Product not found!",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Something went wrong!",
            error: error,
        });
    }
});
//update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productInfo = req.body;
        const zodValidationProductData = product_validation_1.default.parse(productInfo);
        const product = yield product_service_1.productService.getSingleProduct(productId);
        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not found !",
            });
        }
        const result = yield product_service_1.productService.updateProductById(productId, zodValidationProductData);
        return res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product updated failed",
            error: error,
        });
    }
});
// delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.deleteProductById(productId);
        if (result) {
            return res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: "Product not found !",
            });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product delete failed!",
            error: error,
        });
    }
});
exports.productsControllerAll = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
