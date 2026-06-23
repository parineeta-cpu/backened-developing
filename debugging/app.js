// const http = require('http');
// const server = http.createServer((req,res)=>{
//   console.log(req.url)
//   console.log(req.method)
//   console.log(req.headers)
//   let x = 5;
//   if(x=10){
//     console.log(x);
//   }else{
//     console.log(5);
//   }
// })
// const PORT = 3010
// server.listen(PORT,()=>{
// console.log(`Server is running at http://localhost:${PORT}`)
// })


//bugged code


// function calculateArea(width,height{
//   return width+height;
// }
// let width = 10 height=5;
// if(area>100){
//   console.log('the area is large')
// }else{
//   console.log('the area is small')
// }
// if(width+height>100){
//   console.log('area is greater than or equal to 100')
// }

//debugged code

let width = 10 
let height = 6;
function calculateArea(){
  return width*height;
}
let area = calculateArea();
if(area>100){
  console.log('the area is large')
}else{
  console.log('the area is small')
}
if(area>100){
  console.log('area is greater than or equal to 100')
}
