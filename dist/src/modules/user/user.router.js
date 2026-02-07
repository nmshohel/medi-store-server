import express from 'express';
import { userController } from './user.controller';
const router = express.Router();
router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.patch("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);
export const userRouter = router;
//# sourceMappingURL=user.router.js.map