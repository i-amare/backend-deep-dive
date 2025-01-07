import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin.ts";
import homeRouter from "./routes/home.ts";

const app = express();

app.use(bodyParser.urlencoded());
app.use(adminRouter);
app.use(homeRouter);

app.use((req, res, next) => {
	res.status(404);
	res.send("<h1>Error 404: Page not found :(</h1>");
});

app.listen(3000);
