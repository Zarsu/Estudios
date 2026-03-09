import { Router } from "express";
import { validate } from "../middleware/validation";
import { completeParamsSchema, completeSchema, creationSchema } from "../schemas/habitsSchema";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the habits route!" });
});

router.get("/:id", (req, res) => {
    res.status(200).json({ message: `Welcome to the #${req.params.id} habit!` });
});

router.post("/", validate(creationSchema, "body"),(req, res) => {
    res.status(200).json({ message: "Habit created successfully" });
});

router.post("/:id/complete", validate(completeParamsSchema, "params"), validate(completeSchema, "body"), (req, res) => {
    res.status(200).json({ message: `Habit #${req.params.id} marked as complete!` });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ message: `Habit #${req.params.id} updated successfully` });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: `Habit #${req.params.id} deleted successfully` });
});

export default router;