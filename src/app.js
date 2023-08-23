import express from 'express'
import cors from 'cors'
import mongoose from './utils/database.js';
import morgan from 'morgan';
import userRouter from './routes/user.js';

const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// app.use(express.static( 'public'));


// const userRoutes = require('./routes/user');
// const adminRoutes = require('./routes/admin');
console.log('got in server');



//routes
app.use('/api/v1',userRouter);

app.listen(7000); 