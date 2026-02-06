import { NextFunction, Request, Response } from "express"
import { reviewService } from "./reivew.service"


const createReview = async (req: Request, res: Response,next:NextFunction) => {
    try {
   

        const result = await reviewService.createReview(req.body)
        res.status(201).json(result)
    } catch (e) {
        res.status(400).json({
            error:"Review Added Failed",
            details:e
        })

    }
}

export const reviewController = {
    createReview,


}