// import mongoose from "mongoose";

import mongoose, { Schema } from "mongoose";

const librarySchema = new Schema({
    title:{
        type : String,
    },
    author:{
        type : String
    },
    genre:{
        type: String
    },
    isbn :{
        type :String,
    },
    year :{
        type : Number
    },
    status:{
        type: String,
        enum : ["available","borrowed"]
    },
});

const Books = mongoose.model('Books',librarySchema);
export default Books;