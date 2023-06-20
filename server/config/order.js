import { asyncError } from "../middlewares/errorMiddleware.js";
import  Order from "../Models/Order.js";
import { Payment } from "../Models/Payment.js";
import ErrorHandler from "../Utils/ErrorHandler.js";
import { instance } from "../server.js";
import crypto from "crypto";

export const placeOrder = asyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    } = req.body;

    const user = req.user._id
    
})
