import express from 'express';
import { categoryController } from './category.controller';
const router = express.Router();
router.post("/", categoryController.createCategory);
router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getCategoryById);
router.delete("/:categoryId", categoryController.deleteCategory);
router.put("/:categoryId", categoryController.updateCategory);
export const categoryRouter = router;
//# sourceMappingURL=category.router.js.map