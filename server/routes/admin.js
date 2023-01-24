import express from "express";
import {
  registerAdmin,
  loginAdmin,
  updateAdmin,
} from "../controllers/admin.js";

const router = express.Router();

router.put("/registerAdmin", registerAdmin);
router.delete("/loginAdmin", loginAdmin);
router.get("/:id", updateAdmin);

export default router;
