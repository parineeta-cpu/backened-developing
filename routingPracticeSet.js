const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  if(req.url==='/'){
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
res.write('<head><title>My first page</title></head>')
res.write('<body>')
res.write('<h1>Welcome to my First page</h1>')
res.write('</body>')
  res.write('</html');
   return res.end();
  }else if(req.url==='/projects'){
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
res.write('<head><title>My first page</title></head>')
res.write('<body>')
res.write('<h1>Welcome to my project page</h1>')
res.write('</body>')
  res.write('</html');
  return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
res.write('<head><title>My first page</title></head>')
res.write('<body>')
res.write('<h1>Welcome to exception</h1>')
res.write('</body>')
  res.write('</html');
  return res.end();
})
server.listen(3000);