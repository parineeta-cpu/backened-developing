const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
})
const PORT = 3009
server.listen(PORT,()=>{
console.log(`Server is running at http://localhost:${PORT}`)
})