import mongoose from "mongoose";


const connectDB = async () => {
    const url = process.env.MONGO
    console.log(url)
    try {
        await mongoose.connect(url)
        console.log(`mongodb connected to ${url} `)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}
export default connectDB