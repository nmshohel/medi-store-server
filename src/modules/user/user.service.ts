import { Medicine, Order, User } from "../../../generated/prisma/client"
import { MedicineWhereInput, OrderWhereInput, UserWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../lib/prisma"




const getAllUser=async({
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

    const andConditions:UserWhereInput[]=[]
    if(search){
        andConditions.push(
            {
                OR:[
            {
                name:{
                contains:search as string,
                mode:'insensitive'
            },

            },
            {
                email:{
                contains:search as string,
                mode:'insensitive'
            },
      
            },
      
        ]
             }
        )
    }






    const allUser=await prisma.user.findMany({
        take:limit,
        skip,
        where:{
           AND:andConditions
        },
        orderBy: {
            [sortBy]:sortOrder
        },
    
    });

    const total=await prisma.user.count({
        where:{
            AND:andConditions
        }
    })
    
    return {
        data:allUser,
        pagination:{
            total,
            page,
            limit,
            totalpages:Math.ceil(total/limit)

        }
    }
}
const getUserById=async(id:string)=>{
        const result=await prisma.user.findUnique({
            where:{
                id
            },
            include:{
                orders:true,
                medicines:true
            }
        })
        return result
   
}

const updateUser=async(userId:string,data:Partial<User>)=>{
    const result=await prisma.user.update({
        where:{
            id:userId
        },
        data
    })

    return result

}
const deleteUser=async(userId:string)=>{
    const result=await prisma.user.delete({
        where:{
            id:userId
        },
     
    })

    return result

}
export const userService = {

   getAllUser,
   getUserById,
    updateUser,
    deleteUser

  
}