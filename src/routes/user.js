import express from 'express'
import userController from '../controllers/user.js'
const userRouter = express.Router()
const {
    createNewReview,
    viewReviewResults,
} = userController


userRouter.post('/review_submit', createNewReview)
userRouter.get('/review_result', viewReviewResults)
// userRouter.get('/viewbook')

export default userRouter;