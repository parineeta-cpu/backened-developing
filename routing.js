const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url==='/'){
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
res.write('<head><title>home page</title></head>')
res.write('<body>')
res.write('<nav>')
res.write('<ul><a href="/">Home</a></ul>')
res.write('<ul><a href="/Men">Men</a></ul>')
res.write('<ul><a href="/Women">Women</a></ul>')
res.write('<ul><a href="/Kids">Kids</a></ul>')
res.write('<ul><a href="/Cart">Cart</a></ul>')
res.write('</nav>')
res.write('<h1>Welcome to home page</h1>')
res.write('</body>')
  res.write('</html');
   return res.end();
  }else if(req.url==="/Men"){
    res.write('<html>');
res.write('<head><title>home page</title></head>')
res.write('<body>')
res.write('<h1>Welcome to Men page</h1>')
res.write('</body>')
  res.write('</html');
  return res.end()
  }else if(req.url==="/Women"){
    res.write('<html>');
res.write('<head><title>home page</title></head>')
res.write('<body>')
res.write('<h1>Welcome to women page</h1>')
res.write('</body>')
  res.write('</html');
  return res.end()
  }else if(req.url==="/Kids"){
    res.write('<html>');
res.write('<head><title>home page</title></head>')
res.write('<body>')
res.write('<h1>Welcome to kids page</h1>')
res.write('</body>')
  res.write('</html');
  return res.end()
  }else{
    res.write('<html>');
res.write('<head><title>home page</title></head>')
res.write('<body>')
res.write('<h1>Welcome to cart page</h1>')
res.write('</body>')
  res.write('</html');
  return res.end()
  }
})
server.listen(3005);