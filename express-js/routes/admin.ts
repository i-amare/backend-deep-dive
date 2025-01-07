import { Router } from "express";
import path from "node:path";

const router = Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);

router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
	// res.send("<h1>Results Page</h1>");
});

router.get("/add-product", (req, res, next) => {
	res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

export default router;
