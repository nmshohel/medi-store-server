import { Medicine, Order } from "../../../generated/prisma/client"
import { MedicineWhereInput, OrderWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../lib/prisma"

const createOrder=async(data:any)=>{
    const result=await prisma.order.create({
        data:{
            ...data,
        }

    })
    return result
}


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
                medicineId:{
                contains:search as string,
                mode:'insensitive'
            },

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
const getOrderById=async(id:string)=>{
        const result=await prisma.order.findUnique({
            where:{
                id
            },
            include:{
                medicine:true,
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
    deleteOrder

  
}