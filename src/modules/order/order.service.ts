import { Medicine, Order } from "../../../generated/prisma/client"
import { MedicineWhereInput, OrderWhereInput } from "../../../generated/prisma/models"
import { generateOrderNumber } from "../../helpers/orderNumber";
import { prisma } from "../../lib/prisma"

const createOrder = async (data: any, userId: string) => {
  const { orderItems, shippingAddress, paymentMethod, total } = data;
  let orderNumber=0
  orderNumber=generateOrderNumber()
//   check order number exist 
const checkOrderNum=await prisma.order.findFirst({
    where:{
        orderNumber:orderNumber
    }
})
    if(checkOrderNum)
    {
        orderNumber=orderNumber+1
    }


  // 1. Extract all medicine IDs from the incoming order
  const incomingMedicineIds = orderItems.map((item: any) => item.id);

  // 2. Check if the user has already ordered any of these medicines
  // We check OrderItem because that's where the medicine link lives now
  const existingOrderWithMedicine = await prisma.orderItem.findFirst({
    where: {
      medicineId: { in: incomingMedicineIds },
      order: {
        userId: userId,
        // Optional: You might want to allow re-ordering if previous order was CANCELLED
        status: { not: "CANCELLED" } 
      }
    },
    include: {
      medicine: true // To get the name for the error message
    }
  });

  if (existingOrderWithMedicine) {
    
    throw new Error("Order already exist")
  }

  // 3. If no conflict, proceed with Transaction
  const result = await prisma.$transaction(async (tx) => {
    // Create the Order
    const order = await tx.order.create({
      data: {
        userId: userId,
        orderNumber:orderNumber,
        totalAmount: total,
        address: shippingAddress,
        paymentMethod: paymentMethod,
        deliveryFee: 60,
        orderItems: {
          create: orderItems.map((item: any) => ({
            medicineId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        orderItems: true,
      },
    });

    // Decrease stock
    for (const item of orderItems) {
      await tx.medicine.update({
        where: { id: item.id },
        data: {
          stock: { decrement: item.quantity },
        },
      });
    }

    return order;
  });

  return result;
};


const getAllOrder=async({
    search,page,limit,skip,sortBy,sortOrder
    }
    :
    {search:string|undefined,

        page:number,
        limit:number,
        skip:number,
        sortBy:string
        sortOrder:string

    }

)=>{

    const andConditions:OrderWhereInput[]=[]
    if(search){
        andConditions.push(
            {
                OR:[
            {
 

            },
            {
                userId:{
                contains:search as string,
                mode:'insensitive'
            },
      
            },
      
        ]
             }
        )
    }






    const allOrder=await prisma.order.findMany({
        take:limit,
        skip,
        where:{
           AND:andConditions
        },
        orderBy: {
            [sortBy]:sortOrder
        },
        include:{
            user:true,
           
        }
    
    });

    const total=await prisma.order.count({
        where:{
            AND:andConditions
        }
    })
    
    return {
        data:allOrder,
        pagination:{
            total,
            page,
            limit,
            totalpages:Math.ceil(total/limit)

        }
    }
}
const getMyOrder=async({
    search,page,limit,skip,sortBy,sortOrder,userId
    }
    :
    {search:string|undefined,

        page:number,
        limit:number,
        skip:number,
        sortBy:string,
        sortOrder:string,
        userId:string

    }

)=>{
    console.log(userId)
    console.log("My order service")
    const andConditions:OrderWhereInput[]=[]
    if(search){
        andConditions.push(
            {
                OR:[
            {
 

            },
            {
                userId:{
                contains:search as string,
                mode:'insensitive'
            },
      
            },
      
        ]
             }
        )
    }






    const allOrder=await prisma.order.findMany({
        take:limit,
        skip,
        where:{
           AND:andConditions,
           userId:userId
        },
        orderBy: {
            [sortBy]:sortOrder
        },
        include:{
            user:true,
           
        }
    
    });

    const total=await prisma.order.count({
        where:{
            AND:andConditions,
            userId:userId
        }
    })
    
    return {
        data:allOrder,
        pagination:{
            total,
            page,
            limit,
            totalpages:Math.ceil(total/limit)

        }
    }
}
const getOrderById=async(id:string)=>{
        const result=await prisma.order.findUnique({
            where:{
                id
            },
            include:{
          
                user:true
            }
        })
        return result
   
}

const updateOrder=async(orderId:string,data:Partial<Order>)=>{
    const result=await prisma.order.update({
        where:{
            id:orderId
        },
        data
    })

    return result

}
const deleteOrder=async(orderId:string)=>{
    const result=await prisma.order.delete({
        where:{
            id:orderId
        },
     
    })

    return result

}
export const OrderService = {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
    getMyOrder

  
}