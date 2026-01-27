import express, {Router } from 'express';
import { medicineController } from './medicine.controller';
const router = express.Router();
router.post("/",medicineController.createMedicine)
router.get("/",medicineController.getAllMedicine)
router.get("/:id",medicineController.getMedicineById)
router.put("/:medicineId",medicineController.updateMedicine)
router.delete("/:medicineId",medicineController.deleteMedicine)

export const medicineRouter: Router = router;