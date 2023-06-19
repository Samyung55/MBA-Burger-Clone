import { asyncError } from "../middlewares/errorMiddleware";
import { User } from "../models/User";
import { Order } from "../Models/Order";

export const myProfile = (req, res, next) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
};

