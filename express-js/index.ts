import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.urlencoded());

app.use("/results", (req, res, next) => {
	console.log(req.body);
	res.send("<h1>Results Page</h1>");
});

app.use("/submit", (req, res, next) => {
	res.send(
		"<form action='/results' method='POST'><input type='text' name='message'/><button type='submit'>Send Post Request</button></form>"
	);
});

app.use("/", (req, res, next) => {
	console.log("Second middleware");
	res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
