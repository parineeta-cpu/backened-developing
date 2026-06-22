const http = require('http');
const homePage = require('./homepage');
const server = http.createServer(homePage);
server.listen(3004,()=>{
  console.log('server is running')});