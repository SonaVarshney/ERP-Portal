import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
    },
    cloud_id: {
      type: String,
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    team: {
      type: String
    },
    subteam: {
      type: String
    },
    year: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    isGEC: {
      type: Boolean,
      required: true
    },
    folderLink: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);



export default mongoose.model("User", UserSchema);