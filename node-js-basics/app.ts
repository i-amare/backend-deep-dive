import * as http from "node:http";
import requestHandler from "./routes.ts";

const server = http.createServer(requestHandler);

server.listen(3000);
