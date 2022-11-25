import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("Query", QuerySchema);