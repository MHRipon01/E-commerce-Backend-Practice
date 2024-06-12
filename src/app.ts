import express, { Application, Request, Response } from "express";
import cors from 'cors'
import { ProductsRoute } from "./app/modules/products/product.route";

const app:Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/products' , ProductsRoute)




app.get("/", (req: Request, res: Response) => {
  res.send("Hello from setup file");
});

export default app;
