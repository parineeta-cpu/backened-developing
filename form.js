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
  fs.writeFileSync('user-details.txt','Parineeta');
  res.statusCode=302;
res.setHeader('location','/');
   return res.end();
}else {
  res.writeHead(404);
  res.end('<h1>404 - Page Not Found</h1>');
}
})
server.listen(3007);