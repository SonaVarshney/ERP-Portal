import express from "express";
import {
  registerStudent,
  loginStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  getStudents
} from "../controllers/student.js";

const router = express.Router();

router.post("/registerStudent", registerStudent);
router.post("/loginStudent", loginStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.get("/:id", getStudent);
router.get("/", getStudents);


export default router;