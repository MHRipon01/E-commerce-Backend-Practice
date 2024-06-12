import express from 'express';
import { productsControllerAll } from './product.controller';

const router = express.Router();

//will call controller function
router.post('/' , productsControllerAll.createProduct)


export const ProductsRoute = router;