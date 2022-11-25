import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    deadline: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    assignedTo: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "New"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
