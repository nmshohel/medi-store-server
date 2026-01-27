import express, {Router } from 'express';
import { OrderController } from './category.controller';

const router = express.Router();
router.post("/",OrderController.createOrder)
router.get("/",OrderController.getAllOrder)
router.get("/:id",OrderController.getOrderById)
router.patch("/:orderId",OrderController.updateOrder)
router.delete("/:orderId",OrderController.deleteOrder)

export const orderRouter: Router = router;