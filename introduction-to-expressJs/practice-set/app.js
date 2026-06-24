const express = require('express');
const app = express();

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
// app.use((req,res,next)=>{
// res.send('<p>Hello I am parineeta</p>')
// })
app.get("/",(req,res,next)=>{
  console.log("handling for / GET")
  res.send('welcome to my home page')
})
app.get("/contact-us",(req,res,next)=>{
  console.log("handling for /contact-us GET")
res.send(`<form action="/contact-us" method="POST">
  <input type='text' name='username' placeholder='enter your name'>
  <input type='email' name='email' placeholder='enter your email address'>
  <button type='submit'>Submit</button>
  </form>`)
})
app.post("/contact-us",(req,res,next)=>{
  console.log("handling for /contact-us POST")
  res.send('<p>Thanks for your details</p>')
})
const PORT = 3045;
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})