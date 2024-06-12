import { Types } from "mongoose";
import { productModel } from "../products/product.model";
import { TOrder } from "./orders.interface";
import { OrderModel } from "./orders.model";

const createOrder = async (order: TOrder) => {
  try {
    const isProductExits = await productModel.findOne({
      _id: new Types.ObjectId(order.productId),
      "inventory.quantity": { $gte: order.quantity },
    });

    if (!isProductExits) {
      throw new Error("Insufficient quantity available in inventory");
    }
    isProductExits.inventory.quantity =
      isProductExits.inventory.quantity - order.quantity;

    if (isProductExits.inventory.quantity > 0) {
      isProductExits.inventory.inStock = true;
    } else {
      isProductExits.inventory.inStock = false;
    }

    await isProductExits.save();

    const result = await OrderModel.create(order);
    return result;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

const getAllOrders = async (search: { email?: string }) => {
  const result = await OrderModel.find(search);
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
