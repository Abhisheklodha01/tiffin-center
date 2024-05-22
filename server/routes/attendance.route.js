import express from "express";
import {
  UserAttendanceController,
  UpdateAttendanceController,
  GetUsersAttendanceController,
  UpdateAttendanceStatus,
} from "../controllers/attendance.controller.js";
import {isAuthenticated} from '../middlewares/auth.middleware.js'

const router = express.Router();

router.post("/uploadattendance", UpdateAttendanceController);
router.get("/userattendance", isAuthenticated, UserAttendanceController)
router.get("/alluserattendance", GetUsersAttendanceController)
router.put("/updateattendance", UpdateAttendanceController)

export default router