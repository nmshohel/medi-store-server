import express, {Router } from 'express';

import auth, { UserRole } from '../../middleware/auth';
import { reviewController } from './reivew.controller';
const router = express.Router();
router.post("/",auth(UserRole.SELLER,UserRole.CUSTOMER,UserRole.ADMIN),reviewController.createReview)


export const reviewRouter: Router = router;