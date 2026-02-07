import { reviewService } from "./reivew.service";
const createReview = async (req, res, next) => {
    try {
        const result = await reviewService.createReview(req.body);
        res.status(201).json(result);
    }
    catch (e) {
        res.status(400).json({
            error: "Review Added Failed",
            details: e
        });
    }
};
export const reviewController = {
    createReview,
};
//# sourceMappingURL=reivew.controller.js.map