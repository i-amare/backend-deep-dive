import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin.ts";
import homeRouter from "./routes/home.ts";

const app = express();

app.use(bodyParser.urlencoded());
app.use(adminRouter);
app.use(homeRouter);

app.listen(3000);
