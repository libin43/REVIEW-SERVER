import mongoose from "mongoose";
import config from "../config/config.js";

mongoose.set('strictQuery',true);
const dbUrl = config.mongo.uri; 

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

export default mongoose;