import { prisma } from "../../lib/prisma"

const createReview = async (data: any) => {
  const { rating, comment, orderItems } = data
  console.log("data from servie",data)

  const reviewsData = orderItems.map((item: any) => ({
    rating,
    comment,
    medicineId: item.id
  }))

  const result = await prisma.review.createMany({
    data: reviewsData
  })

  return result
}

export const reviewService = {
  createReview
}
