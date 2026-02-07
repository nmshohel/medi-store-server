import { NextFunction, Request, Response } from "express";
export declare const OrderController: {
    createOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllOrder: (req: Request, res: Response) => Promise<void>;
    getOrderById: (req: Request, res: Response) => Promise<void>;
    updateOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMyOrder: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=order.controller.d.ts.map