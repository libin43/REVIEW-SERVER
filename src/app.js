import express from 'express'
import morgan from 'morgan';
import config from './config/config.js';
import userRouter from './routes/user.js';

const app=express();
app.use((req, res, next) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Skip CORS for preflight requests
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',userRouter);

const port = config.port

app.listen(port,()=>{
    console.log(`server listening to ${port}`);
}); 