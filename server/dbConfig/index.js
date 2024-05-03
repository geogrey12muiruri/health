import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async () => {
    try {
        const mongoURI = process.env.MONGO;

        const connection = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

export default dbConnection;
