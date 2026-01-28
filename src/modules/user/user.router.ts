import express, {Router } from 'express';
import { userController } from './user.controller';
import auth, { UserRole } from '../../middleware/auth';


const router = express.Router();
router.get("/",auth(UserRole.ADMIN),userController.getAllUser)
router.get("/:id",userController.getUserById)
router.patch("/:userId",auth(UserRole.ADMIN),userController.updateUser)
router.delete("/:userId",userController.deleteUser)

export const userRouter: Router = router;