import Product from "../model/product";
import Joi from "joi";
import axios from "axios";




export const create = async () =>{
   try {
     const {error}=  productSchema.validate(req.body);
     if(error){
        res.json({
            message : error.details[0].message,
        })
     }
     const product = await Product.create(req,res);
     return res.status(201).json({
        message :"tao san pham thanh cong",
        product,
 })
   } catch (error) {
    return res.status(400).json({
        message : error
    });
   }
};

export const getAll = async () =>{
    try {
        const product = await Product.find();
        return res.status(201).json(product)
      } catch (error) {
       return res.status(400).json({
        message : error
       });
      }
};
export const get = async (res , req) =>{
    try {
        const product = await Product.findOne(req.pargams.id);
        return res.status(201).json(product)
      } catch (error) {
       return res.status(400).json({
           message : error
       });
      }
};
export const update = async(res , req) =>{
    try {
        const  { error} = productSchema.validate(req.body);
                if(error){
                        return res.status(400).json({
                                message : error.details[0].message,
                        });
                };      
        
        const product = await Product.findByIdAndUpdate({_id: req.pagams.id}, req.body,{new: true});
        
        return res.json({
                message:"cap nhat thanh cong",
                product,
        })
} catch (error) {     
        return res.status(400).json({
                message: error,
        });
        
}
};
export const remove = async (req,res) =>{
    try {
        const product = await Product.findByIdAndDelete(req.pagams.id, req.body,);
        return res.json({
                message:"xoa thanh cong  thanh cong",
                product,
        })
} catch (error) {
        return res.status(400).json({
                message: error,
        })
        
}
};