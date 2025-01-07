import * as http from "node:http";

import express from "express";

const app = express();

const server = http.createServer(app);

server.listen(3000);
