import { response } from "express";
import foodModel from "../models/foodModels.js";
import fs from "fs";


//add Foood item

const addFood = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        } 
        const image = req.file.filename;
        const food = new foodModel({
            name,
            description,
            category,
            price,
            image
        });

        await food.save();

        res.json({
            success: true,
            message: "Food added successfully",
            data:food
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
//All food list

const listFood = async (req,res)=>{
    try {
        const foods = await foodModel.find({});
            res.json({success:true, data:foods})
        
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:error.message})
        
    }
}

//Remove food item
const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        return res.json({success:true, message:"Food removed successfully"})
    } catch (error) {
        return res.json({success:false, message:"error.message"})
    }
}

export {addFood,listFood, removeFood};