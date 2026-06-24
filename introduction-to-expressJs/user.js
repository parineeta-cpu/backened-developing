
const fs = require('fs');
const { URLSearchParams } = require('url');
const requestHandler = ((req,res)=>{
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
  // for understanding of chunks and to read chunks
  const body = []
  req.on('data',(chunk)=>{
    console.log(chunk);
    body.push(chunk);
  })

  //buffering chunk to have readable data
  req.on('end',()=>{
  const fullBody = Buffer.concat(body).toString();
  console.log(fullBody);

  //parsing request
  const params = new URLSearchParams(fullBody);
  const bodyObject = {}
  for(const[key,val] of params.entries()){
    bodyObject[key]=val;
    console.log(bodyObject);
    fs.writeFileSync('user-details.txt',JSON.stringify(bodyObject));
  }
  })
  
  res.statusCode=302;
res.setHeader('location','/');
   return res.end();
}else {
  res.writeHead(404);
  res.end('<h1>404 - Page Not Found</h1>');
}
})
module.exports = requestHandler;