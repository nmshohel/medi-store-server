import { NextFunction, Request, Response } from "express";
export declare const userController: {
    getAllUser: (req: Request, res: Response) => Promise<void>;
    getUserById: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map