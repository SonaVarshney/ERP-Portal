import mongoose from "mongoose";


const QuerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    author: {
        type: String
    },
    // queryTo: {

    // },
    // response: {
        
    // }
}, { timestamps: true })

export default mongoose.model("Query", QuerySchema);