import { NextFunction, Request, Response } from "express"

import paginationSortingHelpers from "../../helpers/paginationSorting"
import { categoryService } from "./category.service"



const createCategory = async (req: Request, res: Response,next:NextFunction) => {
    try {
   

        const result = await categoryService.createCategory(req.body)
        res.status(201).json(result)
    } catch (e) {
                res.status(200).json({
            error:"Created Failed",
            details:e
        })

    }
}
const getAllCategory=async(req:Request,res:Response)=>{
    try{
        

        const result=await categoryService.getAllCategory();
        res.status(200).json(result)
    }
    catch(e){
        res.status(400).json({
            error:"Fatching problem",
            details:e
        })

    }

}
const getCategoryById=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const result=await categoryService.getCategoryById(id as string)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Fatching problem",
            details:err
        })

    }

}

const deleteCategory=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {categoryId}=req.params
        
        const result=await categoryService.deleteCategory(categoryId as string)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Delete Failed",
            details:err
        })

    }

}
const updateCategory=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {categoryId}=req.params
        const data=req.body
        const result=await categoryService.updateCategory(categoryId as string,data)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Update Failed",
            details:err
        })

    }

}
export const categoryController = {
    createCategory,
    getAllCategory,
    getCategoryById,
    deleteCategory,
    updateCategory

}