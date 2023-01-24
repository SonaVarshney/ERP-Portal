import express from "express";
import {
  registerFaculty,
  loginFaculty,
  updateFaculty,
  deleteFaculty,
  getFaculty,
  getFacultys
} from "../controllers/faculty.js";

const router = express.Router();

router.put("/registerFaculty", registerFaculty);
router.delete("/loginFaculty", loginFaculty);
router.get("/:id", updateFaculty);
router.get("/:id", deleteFaculty);
router.get("/:id", getFaculty);
router.get("/", getFacultys);


export default router;