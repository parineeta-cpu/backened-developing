import path from 'path';
import express from 'express';
import userRouter from './routes/userRouter.js'
import hostRouter from './routes/hostRouter.js'
const app = express();
app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(import.meta.dirname,'./views','page404.html'))
})
const PORT = 3100;
app.listen(3100,()=>{
  console.log(` server is running at http://localhost:${PORT}`)
})