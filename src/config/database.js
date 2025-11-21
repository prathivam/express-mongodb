import mongoose from 'mongoose'

const connectDB = (async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log('Connection successfull `${connectionInstance.connect.host}`');
        
    } catch (error) {
        console.log('MongoDB Connection failed');
        process.exit(1);
    }
})

export default connectDB;