import { Router } from "express";

const router = Router();

router.post("/results", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
	// res.send("<h1>Results Page</h1>");
});

router.use("/submit", (req, res, next) => {
	res.send(
		"<form action='/results' method='POST'><input type='text' name='message'/><button type='submit'>Send Post Request</button></form>"
	);
});

export default router;
