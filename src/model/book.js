import mongoose from "../utils/database.js";

const bookschema = new mongoose.Schema(
	{
		bookName: { type: String, required: true },
        authorName: { type: String, required: true },
        publishYear: { type: Number, min: 1000, max: new Date().getFullYear(), required: true},
		price: { type: Number, required: true},
        status: { type: Number, default: 1}
	},
	{ collection: 'BOOK-DATA' }
)

const bookmodel = mongoose.model('BookData', bookschema);
export default bookmodel