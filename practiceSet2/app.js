import path from 'path';
import express from 'express';
import homePage from './routes/home.js';
import contactUs from './routes/contact-us.js';
import errorPage from './routes/error.js';
const app = express();
app.use(express.urlencoded());
app.use((req,res,next)=>{
  console.log("First dummy middleware")
console.log(req.url);
next()
})
app.use((req,res,next)=>{
   console.log("second dummy middleware")
console.log(req.method);
next()
})
app.use(homePage);
app.use(contactUs)
app.use(errorPage)
const PORT = 3045;
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})