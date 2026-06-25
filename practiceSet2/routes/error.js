import path from 'path';
import express from 'express';
const errorPage = express.Router();
errorPage.use((req,res,next)=>{
  res.status(404).sendFile(path.join(import.meta.dirname,'../','views','error.html'));
})
export default errorPage;