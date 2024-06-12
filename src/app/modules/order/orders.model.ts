import { Schema, model } from "mongoose";
import { TOrder } from "./orders.interface";

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { versionKey: false },
);

export const OrderModel = model<TOrder>("order", orderSchema);
