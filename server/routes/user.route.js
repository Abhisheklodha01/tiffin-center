import express from "express";
import {
  ForgotPasswordController,
  GetUserProfileController,
  GetUsersController,
  Logincontroller,
  Registercontroller,
} from "../controllers/user.controller.js";
import {isAuthenticated} from '../middlewares/auth.middleware.js'

const router = express.Router();

router.post("/signup", Registercontroller);
router.post("/login", Logincontroller);
router.get("/getprofile", isAuthenticated, GetUserProfileController);
router.put("/forgotpassword", ForgotPasswordController);
router.get("/getusers", GetUsersController)


export default router