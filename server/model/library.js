import mongoose from "mongoose";

const dbConfig = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('db conncected successfully👍'))
    .catch((err)=>console.log(err))
}

export default dbConfig;