import mongoose from "mongoose";

mongoose.set('strictQuery',true);
const dbUrl = 'mongodb://localhost:27017/bookstore'; 

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

export default mongoose;