import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import wordRoute from './routes/wordRoute';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/words', wordRoute);
mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log('Connected to MongoDB');
   
})
    .catch((err) => console.error(err));

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
