import { Router } from "express";

const router = Router();

router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
	// res.send("<h1>Results Page</h1>");
});

router.get("/add-product", (req, res, next) => {
	res.send(
		"<form action='/admin/add-product' method='POST'><input type='text' name='message'/><button type='submit'>Send Post Request</button></form>"
	);
});

export default router;
