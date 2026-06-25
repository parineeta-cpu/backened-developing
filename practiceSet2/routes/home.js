import path from 'path'
import express from 'express';
const homePage = express.Router();
homePage.get("/",(req,res,next)=>{
  console.log("handling for / GET")
  res.sendFile(path.join(import.meta.dirname,'../','views','home.html'))
}) 
export default homePage;