import { NextFunction, Request, Response } from "express"
import { medicineService } from "./medicine.service"
import paginationSortingHelpers from "../../helpers/paginationSorting"

const createMedicine = async (req: Request, res: Response,next:NextFunction) => {
    try {
   

        const result = await medicineService.createMedicine(req.body)
        res.status(201).json(result)
    } catch (e) {
        next(e)

    }
}
const getAllMedicine=async(req:Request,res:Response)=>{
    try{
        
        const {search}=req.query
        const searchString=typeof search ==='string'? search:undefined;
        const {page,limit,skip,sortBy,sortOrder}=paginationSortingHelpers(req.query)
        const result=await medicineService.getAllMedicine({search:searchString,page,limit,skip,sortBy,sortOrder});
        res.status(200).json(result)
    }
    catch(e){
        res.status(400).json({
            error:"Fatching problem",
            details:e
        })

    }

}
const getMedicineById=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const result=await medicineService.getMedicineById(id as string)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Fatching problem",
            details:err
        })

    }

}
const updateMedicine=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {medicineId}=req.params
        const data=req.body
        const result=await medicineService.updateMedicine(medicineId as string,data)
        res.status(200).json(result);

    }
    catch(err){
            next()

    }

}
const deleteMedicine=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {medicineId}=req.params
   
        const result=await medicineService.deleteMedicine(medicineId as string)
        res.status(200).json(result);

    }
    catch(err){
            next()

    }

}
export const medicineController = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine

}