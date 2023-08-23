import express from 'express'
import userController from '../controllers/user.js'
const userRouter = express.Router()
const {createNewBook} = userController
console.log('called in rote');

userRouter.post('/addBook', createNewBook)
userRouter.get('/viewbook')

export default userRouter;