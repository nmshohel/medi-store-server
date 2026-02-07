import { prisma } from "../../lib/prisma";
const createReview = async (data) => {
    const { rating, comment, orderItems } = data;
    console.log("data from servie", data);
    const reviewsData = orderItems.map((item) => ({
        rating,
        comment,
        medicineId: item.id
    }));
    const result = await prisma.review.createMany({
        data: reviewsData
    });
    return result;
};
export const reviewService = {
    createReview
};
//# sourceMappingURL=reivew.service.js.map