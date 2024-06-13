"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/products/product.route");
const orders_route_1 = require("./app/modules/order/orders.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use("/api/products", product_route_1.ProductsRoute);
app.use("/api/orders", orders_route_1.OrderRouter);
app.get("/", (req, res) => {
    res.status(200).send({
        status: true,
        message: "Server running successfully",
    });
});
// no route error
app.get("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
