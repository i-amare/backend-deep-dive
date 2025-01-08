import { Router } from "express";
import path from "node:path";
import { rootDir } from "../utils/path.ts";
import { products } from "./admin.ts";

const router = Router();

router.get("/", (req, res, next) => {
	console.log("products: ", products);
	res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
});

export default router;
