"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email("The email is not valid").optional(),
    productId: zod_1.z.string().optional(),
    price: zod_1.z
        .number({
        invalid_type_error: "Price must be a positive number",
    })
        .positive({ message: "Price must be a positive number" })
        .optional(),
    quantity: zod_1.z
        .number()
        .positive({ message: "Quantity must be a positive number" })
        .optional(),
});
exports.default = orderValidationSchema;
