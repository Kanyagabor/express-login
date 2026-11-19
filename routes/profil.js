import express from "express";

const router = express.Router();

router.post("/",(req,res)=>{
    return res.status(201).json({message:"profil megtekintése"});
})

export default router;