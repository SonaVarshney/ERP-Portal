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

router.put("/registerStudent", registerStudent);
router.delete("/loginStudent", loginStudent);
router.get("/:id", updateStudent);
router.get("/:id", deleteStudent);
router.get("/:id", getStudent);
router.get("/", getStudents);


export default router;