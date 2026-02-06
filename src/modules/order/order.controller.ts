import { NextFunction, Request, Response } from "express"

import paginationSortingHelpers from "../../helpers/paginationSorting"
import { OrderService } from "./order.service"


const createOrder = async (req: Request, res: Response,next:NextFunction) => {
    try {
   
        // const userId="4cYcXznj2AkPeSAdJHjqFQ1CoLNVYrQ7"
        const userId=req.user?.id
        console.log({userId})
        const result = await OrderService.createOrder(req.body,userId as string)
        res.status(201).json(result)
    } catch (e) {
        res.status(400).json({
            error:"Order Creation Failed",
            details:e
        })

    }
}
const getAllOrder=async(req:Request,res:Response)=>{
    try{
        
        const {search}=req.query
        const searchString=typeof search ==='string'? search:undefined;
        const {page,limit,skip,sortBy,sortOrder}=paginationSortingHelpers(req.query)
        const result=await OrderService.getAllOrder({search:searchString,page,limit,skip,sortBy,sortOrder});
        res.status(200).json(result)
    }
    catch(e){
        res.status(400).json({
            error:"Fatching problem",
            details:e
        })

    }

}
const getMyOrder=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const userId=id as string
        console.log("user controller",userId)
        const {search}=req.query
        const searchString=typeof search ==='string'? search:undefined;
        const {page,limit,skip,sortBy,sortOrder}=paginationSortingHelpers(req.query)
        const result=await OrderService.getMyOrder({search:searchString,page,limit,skip,sortBy,sortOrder,userId});
        res.status(200).json(result)
    }
    catch(e){
        res.status(400).json({
            error:"Fatching problem",
            details:e
        })

    }

}
const getOrderById=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const result=await OrderService.getOrderById(id as string)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Fatching problem",
            details:err
        })

    }

}
const updateOrder=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {orderId}=req.params
        const data=req.body
        const result=await OrderService.updateOrder(orderId as string,data)
        res.status(200).json(result);

    }
    catch(err){
            res.status(400).json({
            error:"Update Failed",
            details:err
        })

    }

}
const deleteOrder=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
        const {orderId}=req.params
   
        const result=await OrderService.deleteOrder(orderId as string)
        res.status(200).json(result);

    }
    catch(err){
        res.status(400).json({
            error:"Delete Failed",
            details:err
        })

    }

}
export const OrderController = {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
    getMyOrder

}