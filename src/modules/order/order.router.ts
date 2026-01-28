import express, {Router } from 'express';
import { OrderController } from './order.controller';
import auth, { UserRole } from '../../middleware/auth';

const router = express.Router();
router.post("/",OrderController.createOrder)
router.get("/",auth(UserRole.SELLER),OrderController.getAllOrder)
router.get("/:id",OrderController.getOrderById)
router.patch("/:orderId",auth(UserRole.SELLER),OrderController.updateOrder)
router.delete("/:orderId",OrderController.deleteOrder)

export const orderRouter: Router = router;