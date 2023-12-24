import { Router } from "express";
import { getAllUsers, userLogin, userLogout, userSignup, verifyUser } from "../controllers/user_controllers.js";
import { signupValidator, loginValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token_manager.js";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.post('/signup', validate(signupValidator),userSignup);
userRoutes.post('/login', validate(loginValidator), userLogin);
userRoutes.get('/logout', verifyToken, userLogout);
userRoutes.get('/auth-status', verifyToken, verifyUser);

export default userRoutes;