import express from "express";

const app = express();

app.use((req, res, next) => {
	console.log("App triggered");
	next();
});

app.use("/results", (req, res, next) => {
	console.log("First middleware");
	res.send("<h1>Results Page</h1>");
});

app.use("/", (req, res, next) => {
	console.log("Second middleware");
	res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
