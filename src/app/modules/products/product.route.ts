import express from "express";
import { productsControllerAll } from "./product.controller";

const router = express.Router();

//will call controller function
router.post("/", productsControllerAll.createProduct);
router.get("/", productsControllerAll.getAllProduct);
router.get("/:productId", productsControllerAll.getSingleProduct);
router.put("/:productId", productsControllerAll.updateProduct);
router.delete("/:productId", productsControllerAll.deleteProduct);

export const ProductsRoute = router;
