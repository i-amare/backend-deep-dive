import * as http from "node:http";

import express from "express";

const app = express();
app.use((req, res, next) => {
	console.log("First middleware");
	next();
});

app.use((req, res, next) => {
	console.log("Second middleware");
	res.end();
});

const server = http.createServer(app);

server.listen(3000);
