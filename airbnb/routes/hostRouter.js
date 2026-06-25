import path from 'path';
import express from 'express';
const hostRouter = express.Router();
hostRouter.get("/host/add-home",(req,res,next) =>{
console.log(req.url);
res.sendFile(path.join(import.meta.dirname,'../','views','addHome.html'))
   hostRouter.post("/host/add-home",(req,res,next)=>{
  res.sendFile(path.join(import.meta.dirname,'../','views','addHomeSuccessfully.html'))
  console.log(req.body);
})
})
export default hostRouter;