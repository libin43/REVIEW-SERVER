import mongoose from "../utils/database.js";

const reviewschema = new mongoose.Schema(
	{
		appUsage: { type: String, required: true },
        selectedGoals: { type: Array, required: true },
        userExperience: { type: Number, min: 0, max: 10, required: true},
		improvements: { type: String, required: true},
        birthday: { type: Date, require: true}
	},
	{ collection: 'review' }
)

const reviewmodel = mongoose.model('ReviewData', reviewschema);
export default reviewmodel