import { Router } from "express";

const router = Router();

router.use("/", (req, res, next) => {
	res.send("<h1>Hello from Express!</h1>");
});

export default router;
