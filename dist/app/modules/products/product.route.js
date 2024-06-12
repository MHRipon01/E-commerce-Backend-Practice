"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//will call controller function
router.post('/', product_controller_1.productsControllerAll.createProduct);
router.get('/', product_controller_1.productsControllerAll.getAllProduct);
router.get('/:productId', product_controller_1.productsControllerAll.getSingleProduct);
router.put('/:productId', product_controller_1.productsControllerAll.updateProduct);
router.delete('/:productId', product_controller_1.productsControllerAll.deleteProduct);
exports.ProductsRoute = router;
