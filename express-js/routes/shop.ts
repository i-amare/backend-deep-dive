import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
	res.send("<h1>Hello from Express!</h1>");
});

export default router;
