import reviewmodel from "../model/review.js";

const userController = {
    createNewReview: (req, res) =>{
        console.log(req.body);

        reviewmodel.create(req.body).then((review)=>{
            res.status(200).json({ success: true, message: 'New Review Added Successfully', review })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({ error: true, message: 'Internal Server Error' });
        })
    },

    // viewBooks: async (req, res)=>{
    //     try{
    //         const allBooks = await bookmodel.find()
    //         console.log(allBooks);
    //     }
    //     catch(error){
    //         console.log(error)
    //         res.status(500).json({ message: "something went wrong" })
    //     }
    // }
}

export default userController