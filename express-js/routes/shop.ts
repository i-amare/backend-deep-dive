import { Router } from "express";
import path from "node:path";

const router = Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);


router.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

export default router;
