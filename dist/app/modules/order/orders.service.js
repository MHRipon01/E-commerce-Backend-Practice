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
exports.OrderService = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../products/product.model");
const orders_model_1 = require("./orders.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isProductExits = yield product_model_1.productModel.findOne({
            _id: new mongoose_1.Types.ObjectId(order.productId),
            "inventory.quantity": { $gte: order.quantity },
        });
        if (!isProductExits) {
            throw new Error("Insufficient quantity available in inventory");
        }
        isProductExits.inventory.quantity =
            isProductExits.inventory.quantity - order.quantity;
        if (isProductExits.inventory.quantity > 0) {
            isProductExits.inventory.inStock = true;
        }
        else {
            isProductExits.inventory.inStock = false;
        }
        yield isProductExits.save();
        const result = yield orders_model_1.OrderModel.create(order);
        return result;
    }
    catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
});
const getAllOrders = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.OrderModel.find(search);
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrders,
};
