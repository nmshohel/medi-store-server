import { NextFunction, Request, Response } from "express";
export declare const medicineController: {
    createMedicine: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllMedicine: (req: Request, res: Response) => Promise<void>;
    getMedicineById: (req: Request, res: Response) => Promise<void>;
    updateMedicine: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteMedicine: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=medicine.controller.d.ts.map