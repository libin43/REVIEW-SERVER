import bookmodel from "../model/book.js";

const userController = {
    createNewBook: async (req, res) =>{

        bookmodel.create(req.body).then((book)=>{
            res.status(200).json({ success: true, message: 'New Book Added Successfully', book })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({ error: true, message: 'Internal Server Error' });
        })
    },

    viewBooks: async (req, res)=>{
        try{
            const allBooks = await bookmodel.find()
            console.log(allBooks);
        }
        catch(error){
            console.log(error)
            res.status(500).json({ message: "something went wrong" })
        }
    }
}

export default userController