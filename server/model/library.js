import mongoose from "mongoose"

const dbConfig = ()=>{
    mongoose.connect('mongodb+srv://jhas24020:FbSq7xVpAzPdAO0D@satyam.ob1iwyi.mongodb.net/library')
    .then(()=>console.log('db conncected successfully👍'))
    .catch((err)=>console.log(err))
}

export default dbConfig;