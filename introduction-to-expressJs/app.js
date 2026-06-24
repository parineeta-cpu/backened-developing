//externa; module
const express = require('express')
//local module
const requestHandler = require('./user');

const app = express()
app.use("/",(req,res,next)=>{
  console.log('came in first middleware');
  next();
})
app.use("/submit-details",(req,res,next)=>{
  console.log('came in second middleware');
  res.send('<p>Welcome to the submit page</p>')
})
const PORT = 3032
app.listen(PORT,()=>{
console.log(`Server is running at http://localhost:${PORT}`)
})