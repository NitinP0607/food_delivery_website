import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://patelnitin1299:patelnitin1299@cluster0.uiixljo.mongodb.net/fooddel')
    .then(()=>{
        console.log("MongoDB connected");
    })
}