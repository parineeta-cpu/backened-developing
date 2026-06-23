const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url==='/' && req.method==="GET"){
  res.setHeader('Content-Type','text/html')
res.write('<html>')
res.write('<head><title>Form page</title></head>')
res.write('<body>')
res.write('<form action="/submit-details" method="POST">')
res.write('<input type="text" name="Username" placeholder="Enter your name">')
res.write('<label for="Male">Male</label>')
res.write('<input type="radio" id="Male" name="gender" value="male">')
res.write('<label for="Female">Female</label>')
res.write('<input type="radio" id="Female" name="gender" value="female">')
res.write('<button type="submit">Submit</button>')
res.write('</form>')
res.write('</body>')
res.write('</html>')
return res.end()
}
else if(req.url==='/submit-details' && req.method==="POST"){
  
  const body = []
  req.on('data',(chunk)=>{
    console.log(chunk);
    body.push(chunk);
  })

 
  req.on('end',()=>{
  const fullBody = Buffer.concat(body).toString();
  console.log(fullBody);

  //writeFileSyncs tells the event loop to do the input output work by itself which blocks the other codes hence we use writeFile which gives the work to working thread 
  //when status code is outside the function it will execute before the callback function(async code)
  const params = new URLSearchParams(fullBody);
  const bodyObject = {}
  for(const[key,val] of params.entries()){
    bodyObject[key]=val;
   } console.log(bodyObject);
   fs.writeFile('user-details.txt',JSON.stringify(bodyObject),(error)=>{
      console.log("data loaded successfully")
    res.statusCode=302;
res.setHeader('location','/');
   return res.end();
  }
  ); 
  })
}else {
  res.writeHead(404);
  res.end('<h1>404 - Page Not Found</h1>');
}
})
const PORT = 3006;
server.listen(PORT,()=>{
  console.log(`server is running on localhost:${PORT}`)
});