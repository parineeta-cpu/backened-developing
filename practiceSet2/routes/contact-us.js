import path from 'path';
import express from 'express'
const contactUs = express.Router()
contactUs.get("/contact-us",(req,res,next)=>{
  console.log("handling for /contact-us GET")
res.sendFile(path.join(import.meta.dirname,'../','views','contact-us.html'))
})
contactUs.post("/contact-us",(req,res,next)=>{
  console.log("handling for /contact-us POST")
  console.log(req.body)
  res.sendFile(path.join(import.meta.dirname,'../','views','contactSuccessfull.html'))
})
export default contactUs;