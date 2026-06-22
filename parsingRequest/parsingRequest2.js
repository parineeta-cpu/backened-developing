const http = require('http');
const requestHandler = require('./parsingRequest');
const server = http.createServer(requestHandler);
const PORT = 3003;
server.listen(PORT,()=>{
  console.log("server is running on localhost:${PORT}")
});