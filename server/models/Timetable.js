import mongoose from "mongoose"; 

// need to make subjects

const TimetableSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    semester: {
        type: String, 
        required: true
    },
    schedule: [
        {
            start_time: String,
            end_time: String,
            day: String,
            subject: String,
            teacher: String,
            topic: String
        }
    ]
})

export default mongoose.model("Timetable", TimetableSchema);
