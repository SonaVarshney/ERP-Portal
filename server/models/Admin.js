import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            required: true
        },
        // erpadmin23
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);
