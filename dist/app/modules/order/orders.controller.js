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
exports.OrderController = void 0;
const orders_service_1 = require("./orders.service");
const orders_validation_1 = __importDefault(require("./orders.validation"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = req.body;
    try {
        const value = orders_validation_1.default.parse(orders);
        const order = yield orders_service_1.OrderService.createOrder(value);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: order,
        });
        /* eslint-disable @typescript-eslint/no-explicit-any */
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something Went Wrong",
            error: error,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = {};
        if (req.query.email) {
            search.email = req.query.email;
        }
        const orders = yield orders_service_1.OrderService.getAllOrders(search);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: orders,
        });
        /* eslint-disable @typescript-eslint/no-explicit-any */
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Order not found",
            error: error,
        });
    }
});
exports.OrderController = { createOrder, getAllOrders };
