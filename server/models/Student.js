import mongoose from "mongoose"; 

// need to make subjects

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    enroll: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
    },
    cloud_id: {
      type: String,
    },
    password: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    studentPhone: {
      type: String,
      required: true
    },
    studentAddress: {
      type: String,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);



export default mongoose.model("Student", StudentSchema);