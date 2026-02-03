import { Medicine } from "../../../generated/prisma/client"
import { MedicineWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../lib/prisma"
import { ICreateMedicineData } from "../../types"

const createMedicine=async(data:ICreateMedicineData)=>{
    const result=await prisma.medicine.create({
        data:{
            ...data,
        }

    })
    return result
}


const getAllMedicine=async({
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

    const andConditions:MedicineWhereInput[]=[]
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
                manufacturer:{
                contains:search as string,
                mode:'insensitive'
            },
      
            },
      
        ]
             }
        )
    }






    const allMedicine=await prisma.medicine.findMany({
        take:limit,
        skip,
        where:{
           AND:andConditions
        },
        orderBy: {
            [sortBy]:sortOrder
        },
    
    });

    const total=await prisma.medicine.count({
        where:{
            AND:andConditions
        }
    })
    
    return {
        data:allMedicine,
        pagination:{
            total,
            page,
            limit,
            totalpages:Math.ceil(total/limit)

        }
    }
}
const getMedicineById=async(id:string)=>{
        const result=await prisma.medicine.findUnique({
            where:{
                id
            },
            include:{
                category:true,
                reviews:true
            }
        })
        return result
   
}

const updateMedicine=async(medicineId:string,data:Partial<Medicine>)=>{
    const result=await prisma.medicine.update({
        where:{
            id:medicineId
        },
        data
    })

    return result

}
const deleteMedicine=async(medicineId:string)=>{
  
    const isExist=await prisma.medicine.findUnique({
        where:{
            id:medicineId
        }
    })
    console.log(isExist,"**************")
    if(isExist===null)
    {
        throw new Error("Medicine not found")
    }
    const result=await prisma.medicine.delete({
        where:{
            id:medicineId
        },
     
    })

    return result

}
export const medicineService = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine

  
}