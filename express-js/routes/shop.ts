import { Router } from "express";
import path from "node:path";
import { rootDir } from "../utils/path.ts";

const router = Router();

router.get("/", (req, res, next) => {
	res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
});

export default router;
