const {sumHandler} = require('./add')
const homePage = ((req,res)=>{
  console.log(req.url);
  if(req.url==="/"){
    res.setHeader('Content-Type','text/html')
    res.write(`<html>
      <head><title>Home page</title></head>
      <body>
        <h1>Welcome to the home page</h1>
        <a href="/calculator">calculator</a>
        </body>
      </html>`)
      return res.end();
  }
  else if(req.url==="/calculator"){
    res.setHeader('Content-Type','text/html')
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
      <form action='/calculator-result' method='POST'>
        <input type="number" placeholder="first number" name="value1">
        <input type="number" placeholder="second number" name="value2">
        <button type="submit">Submit</button>
        </form>
        </body>
      </html>`)
      return res.end();
  }else if(req.url==='/calculator-result' && req.method==='POST'){
    res.setHeader('Content-Type','text/html')
    sumHandler(req,res);
  }

})
module.exports=homePage; 