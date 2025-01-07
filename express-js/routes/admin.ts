import { Router } from "express";
import path from "node:path";
import { rootDir } from "../utils/path.ts";

const router = Router();

router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
	// res.send("<h1>Results Page</h1>");
});

router.get("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "..", "views", "add-product.html"));
});

export default router;
