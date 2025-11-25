import express from 'express';
import cors from 'cors';
import { connectDB } from './configue/db.js';
import foodRouter from './routes/foodRoute.js';
import dotenv from "dotenv";
dotenv.config(); 

//App Configue

const app = express();
const port = process.env.PORT || 4000;

//Middlewares

app.use(express.json());
app.use(cors());

//DB Configue
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));

//API Endpoints
app.get("/", (req, res) => {
    res.status(200).send("API working");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//mongodb+srv://patelnitin1299:<db_password>@cluster0.uiixljo.mongodb.net/?