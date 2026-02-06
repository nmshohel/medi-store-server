import express, {Router } from 'express';
import { OrderController } from './order.controller';
import auth, { UserRole } from '../../middleware/auth';

const router = express.Router();
router.get("/my-order/:id",auth(UserRole.CUSTOMER,UserRole.ADMIN,UserRole.SELLER),OrderController.getMyOrder)
router.post("/",auth(UserRole.CUSTOMER),OrderController.createOrder)

router.get("/",OrderController.getAllOrder)
router.get("/:id",OrderController.getOrderById)

router.patch("/:orderId",auth(UserRole.SELLER),OrderController.updateOrder)
router.delete("/:orderId",OrderController.deleteOrder)

export const orderRouter: Router = router;