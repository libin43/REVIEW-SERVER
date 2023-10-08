import express from 'express'
import userController from '../controllers/user.js'
const userRouter = express.Router()
const {createNewReview} = userController


userRouter.post('/review_submit', createNewReview)
// userRouter.get('/viewbook')

export default userRouter;