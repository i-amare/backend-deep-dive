import bodyParser from "body-parser";
import express from "express";
import path from "node:path";
import adminRouter from "./routes/admin.ts";
import shopRouter from "./routes/shop.ts";

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
	res.status(404);
	res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
