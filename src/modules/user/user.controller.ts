import { NextFunction, Request, Response } from "express"

import paginationSortingHelpers from "../../helpers/paginationSorting"
import { userService } from "./user.service";




const getAllUser=async(req:Request,res:Response)=>{
    try{
        
        const {search}=req.query
        const searchString=typeof search ==='string'? search:undefined;
        const {page,limit,skip,sortBy,sortOrder}=paginationSortingHelpers(req.query)
        const result=await userService.getAllUser({search:searchString,page,limit,skip,sortBy,sortOrder});
        res.status(200).json(result)
    }
    catch(e){
        res.status(400).json({
            error:"Fatching problem",
            details:e
        })

    }

}
const getUserById=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const result=await userService.getUserById(id as string)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Fatching problem",
            details:err
        })

    }

}
const updateUser=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {userId}=req.params
        const data=req.body
        const result=await userService.updateUser(userId as string,data)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Update Failed",
            details:err
        })

    }

}
const deleteUser=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {userId}=req.params
   
        const result=await userService.deleteUser(userId as string)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Delete Failed",
            details:err
        })

    }

}
export const userController = {

    getAllUser,
    getUserById,
    updateUser,
    deleteUser

}

