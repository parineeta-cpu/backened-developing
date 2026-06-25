import path from 'path';
import express from 'express';
const userRouter = express.Router();
userRouter.get("/",(req,res,next) =>{
console.log(req.url);
res.sendFile(path.join(import.meta.dirname,'../','views','index.html'))
})
export default userRouter;