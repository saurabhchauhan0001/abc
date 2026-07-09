import express from 'express';
import dotenv from 'dotenv';

let app = express();
app.use(express.json());

dotenv.config();
let PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    return res.status(200).json({message:"what about you ?"})
})

app.get("/health",(req,res)=>{
    return res.status(200).json({message:"all is good and well"})
})

    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })