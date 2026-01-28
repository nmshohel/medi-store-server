import express, {Router } from 'express';
import { medicineController } from './medicine.controller';
import auth, { UserRole } from '../../middleware/auth';
const router = express.Router();
router.post("/",auth(UserRole.SELLER),medicineController.createMedicine)
router.get("/",medicineController.getAllMedicine)
router.get("/:id",medicineController.getMedicineById)
router.put("/:medicineId",auth(UserRole.SELLER),medicineController.updateMedicine)
router.delete("/:medicineId",auth(UserRole.SELLER),medicineController.deleteMedicine)

export const medicineRouter: Router = router;