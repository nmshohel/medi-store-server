import { Medicine, Order } from "../../../generated/prisma/client"
import { MedicineWhereInput, OrderWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../lib/prisma"

const createCategory=async(data:any)=>{
    const result=await prisma.category.create({
        data:{
            ...data,
        }

    })
    return result
}






const getAllCategory=async()=>{
        
        const result=await prisma.category.findMany();

    return result;

    }
const getCategoryById=async(id:string)=>{
  
        const result=await prisma.category.findUnique({
            where:{
                id
            }
        })
        return result
   
}


const deleteCategory=async(categoryId:string)=>{
    const result=await prisma.category.delete({
        where:{
            id:categoryId
        }
     
    })

    return result

}
export const categoryService = {
    createCategory,
    getAllCategory,
    getCategoryById,
    deleteCategory

  
}