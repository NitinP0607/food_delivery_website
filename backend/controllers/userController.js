import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login Logic

export const loginUser = async(req,res)=>{

}

//signup logic

export const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;

    try {
        const user = await userModel.find
    } catch (error) {
        
    }

}