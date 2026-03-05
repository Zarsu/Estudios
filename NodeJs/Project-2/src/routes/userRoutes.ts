import { Router} from "express";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the user route!" });
});

router.get("/:id", (req, res) => {
    res.status(200).json({ message: `Welcome to the #${req.params.id} user!` });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ message: `User #${req.params.id} updated successfully` });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: `User #${req.params.id} deleted successfully` });
});

export default router;