import express from "express";
import {
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  paymentVerification,
  placeOrder,
  placeOrderOnline,
  processOrder,
} from "../controllers/order.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.post("/createorder", isAuthenticated, placeOrder)

router.post("/createorderonline", isAuthenticated, placeOrderOnline)

router.post("/paymentverification", isAuthenticated, paymentVerification)

router.get("/myorders", isAuthenticated, getMyOrders);

router.get("/order/:id", isAuthenticated, getOrderDetails)

