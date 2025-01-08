import { Router } from "express";
import path from "node:path";
import { rootDir } from "../utils/path.ts";

const router = Router();

const products: any[] = [];

router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	// @ts-ignore
	products.push({ title: req.body.title });
	res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "..", "views", "add-product.html"));
});

export { products };
export default router;
