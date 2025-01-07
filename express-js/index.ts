import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin.ts";
import shopRouter from "./routes/shop.ts";

const app = express();

app.use(bodyParser.urlencoded());
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
	res.status(404);
	res.send("<h1>Error 404: Page not found :(</h1>");
});

app.listen(3000);
