const sumHandler = ((req,res)=>{
  console.log("inside sum handler",req.url);
const body = [];
    req.on('data',(chunk)=>{
body.push(chunk);
    })
    req.on('end',()=>{
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = {};
      for(const[key,val] of params.entries()){
        bodyObject[key] = val;
      }
      const result = Number(bodyObject.value1)+Number(bodyObject.value2);
        console.log(result);
        res.setHeader('Content-Type','text/html')
    res.write(`<html>
      <head><title>Home page</title></head>
      <body>
        <h1>your result is ${result}</h1>
        </body>
      </html>`)
      return res.end();
      
    })
    
})
exports.sumHandler = sumHandler;