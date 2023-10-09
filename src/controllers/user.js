import reviewmodel from "../model/review.js";

const userController = {
    createNewReview: (req, res) => {
        console.log(req.body);

        reviewmodel.create(req.body).then((review) => {
            res.status(200).json({ success: true, message: 'New Review Added Successfully', review })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: true, message: 'Internal Server Error' });
        })
    },

    viewReviewResults: async (req, res) => {
        try {
            let reviewResult = await reviewmodel.find()
            if(reviewResult.length==0){
                reviewResult = 'No records'
            }
            console.log(reviewResult);
            res.status(200).json({ success: true, message: 'Review Result Fetched Successfully', reviewResult })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "something went wrong" })
        }
    },

}

export default userController