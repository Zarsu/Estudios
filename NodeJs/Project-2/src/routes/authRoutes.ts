import { Router} from "express";
import { register } from "../controllers/authController";
import { validate } from "../middleware/validation";
import { insertUserSchema } from "../db/dbSchema";

const router = Router();

router.post("/register", validate(insertUserSchema, "body"), register);

router.post("/login", (req, res) => {
    res.status(200).json({ message: "User logged in successfully" });
});

export default router;