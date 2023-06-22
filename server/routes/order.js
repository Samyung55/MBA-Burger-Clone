const express = require("express");
const {
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  paymentVerification,
  placeOrder,
  placeOrderOnline,
  processOrder,
} = require("../controllers/order.js");
const { authorizeAdmin, isAuthenticated } = ("../middlewares/auth.js");

const router = express.Router()

router.post("/createorder", isAuthenticated, placeOrder)

router.post("/createorderonline", isAuthenticated, placeOrderOnline)

router.post("/paymentverification", isAuthenticated, paymentVerification)

router.get("/myorders", isAuthenticated, getMyOrders);

router.get("/order/:id", isAuthenticated, getOrderDetails)

//Admin Middlewares

router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders)

router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder)

export default router;