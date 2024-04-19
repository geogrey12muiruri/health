import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
       const connection = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });

        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error in connecting to database', error);
    }
    }
    export default dbConnection;