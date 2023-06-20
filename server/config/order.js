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

    const orderOptions = {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        shippingCharges,
        totalAmount,
        user,
    };

    await Order.create(orderOptions)

    res.status(201).json({
        success: true,
        message: "Order Placed Successfully via Cash on Delivery"
    });
});

export const placeOrderOnline = asyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    } = req.body;

    const user = req.user._id;

    const orderOptions = {
        shippingInfo, 
        orderItems,
        paymentMethod, 
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        user
    };

    const options = {
        amount: Number(totalAmount) * 100,
        currency: "USD",
    };

    const order = await instance.orders.create(options);
    
    res.status(201).json({
        success: true,
        order,
        orderOptions,
    });
});

export const paymentVerification = asyncError(async(req, res, next) => {
    const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        orderOptions,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body)
    .digest("hex")
})